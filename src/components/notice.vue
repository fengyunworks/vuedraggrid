<template>
  <div class="notice">

    <div data-v-4410c049="" class="notice-content">
      <div data-v-4410c049="" class="notice">
        <p data-v-4410c049="" class="line-clamp" style="overflow: hidden; overflow-wrap: break-word;"><a
            data-v-4410c049="">内容11111111111111111111111111111111</a></p>
        <p data-v-4410c049="" class="time"> 2023-02-28 17:28:32 </p></div>
      <div data-v-4410c049="" class="notice"><p data-v-4410c049="" class="line-clamp"
                                                style="overflow: hidden; overflow-wrap: break-word;"><a
          data-v-4410c049="">内容内容222222222222222222222222222222222</a></p>
        <p data-v-4410c049="" class="time"> 2022-11-24 10:19:20 </p></div>
      <div data-v-4410c049="" class="notice"><p data-v-4410c049="" class="line-clamp"
                                                style="overflow: hidden; overflow-wrap: break-word;"><a
          data-v-4410c049="">内容内容333333333333333333333333333</a></p>
        <p data-v-4410c049="" class="time"> 2022-11-18 11:19:50 </p></div>
      <div data-v-4410c049="" class="notice"><p data-v-4410c049="" class="line-clamp"
                                                style="overflow: hidden; overflow-wrap: break-word;"><a
          data-v-4410c049="">内容内容44444444444444444444444444</a></p>
        <p data-v-4410c049="" class="time"> 2022-10-24 16:33:49 </p></div>
    </div>

  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
@mixin overflow-text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.notice {
  width: 100%;
  background: #fff;

  .notice-content {
    .notice {
      font-size: 12px;
      line-height: 15px;
      cursor: pointer;

      > .time {
        color: #999;
        margin-top: 8px;
      }

      > .line-clamp {
        word-break: break-all;

        a {
          color: #333;

          &:hover {
            color: blue;
          }
        }
      }

      .link {
        cursor: pointer;

        &:hover {
          color: blue;
        }
      }

      padding: 6px 0px;
    }

    > .no-notice {
      width: 132px;
      height: 134px;
      text-align: center;
      color: #999;
      font-size: 14px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }
}
</style>
