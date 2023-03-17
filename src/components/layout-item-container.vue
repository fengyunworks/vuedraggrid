<template>
  <div class="layout-item-container">
    <div class="part-title">
      <span class="title-text">{{ title }}</span>

      <div v-if="!type">
        <el-link
            v-for="item in operation"
            :key="item"
           type="primary"
            :name="icon"
            @click="handleClickTip"
        >
          {{ item }}
        </el-link>
      </div>
      <slot
          v-if="type"
          name="delete"
      />
    </div>
    <div class="part-content">
      <el-scrollbar :wrap-style="{height: 'calc(100% - 0px)','overflow-x': 'hidden'}">
        <slot/>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    operation: {
      type: Array,
      default: () => {
        return [];
      },
    },
    type: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    handleClickTip() {
      this.$slots.default &&
      this.$slots.default[0].componentInstance.handleClickTip();
    },
  },
};
</script>

<style lang="scss" scoped>
.layout-item-container {
  width: 100%;
  height: 80%;
  padding: 16px;

  .el-scrollbar {
    height: calc(100% - 24px);

    ::v-deep .el-scrollbar__wrap {
      overflow-x: hidden;
    }

    .is-horizontal {
      display: none;
    }
  }

  .part-title {
    padding: 0px 8px;
    font-size: 12px;
    height: 16px;
    line-height: 16px;
    border-left: 4px solid blue;
    display: flex;
    justify-content: space-between;

    .title-text {
      color: #333;
      font-weight: 700;
    }
  }

  .part-content {
    height: 100%;
    padding: 8px 0px;
  }
}
</style>
