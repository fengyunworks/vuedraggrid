<template>
  <div class="notice">
    <div class="notice-content">
      <template v-if="noticeList.length">
          <div
            v-for="item in noticeList"
            :key="item.id"
            class="notice"
            @click="goToDetail(item)"
          > 
            <p class="line-clamp">
              <a>{{ item.title }}</a>
            </p>
            <p class="time">
                {{ item.createdAt }}
            </p>
          </div>
      </template>
      <div
          v-else
          class="no-notice"
      >
          <img :src="noData">
      </div>
    </div>
</div>
</template>

<script>
import lineClamp from 'line-clamp';
import noData from '@/assets/images/main/no-data.png';
import config from '@/config';

const { OPERATION_PLATFORM_URL } = config;

export default {
  name: "noticeMessage",
  filters: {
    transTime (val) {
      return moment(val).format('YYYY-MM-DD HH:mm:ss');
    },
  },
  props: {
    message: {
      type: Array,
      default: () => [],
    },
  },
  data () {
    return {
      noData,
      noticeList: []
    };
  },
  computed: {
    formatedMessage () {
      return (this.noticeList || []).map(item => {
        const parser = new DOMParser();
        const ele = parser.parseFromString(item.content, 'text/html');
        item.content = ele.documentElement.innerText;
        return item;
      });
    },
  },
  watch: {
    noticeList: {
      deep: true,
      async handler (val) {
        if (val.length) {
          await this.$nextTick();
          const elements = document.querySelectorAll('.line-clamp');
          elements.forEach(item => lineClamp(item, 2));
        }
      },
    },
  },
  created() {
    this.getNoticeList();
  },
  methods: {
    handleClickTip () {
      window.open(`${OPERATION_PLATFORM_URL}/message/notice`, '_self');
    },
    goToDetail (item) {
      window.open(`${OPERATION_PLATFORM_URL}/message/notice/detail/${item.id}`, '_self');
    },
    // 获取通知列表
    async getNoticeList () {
      const params = {
        currentPage: 1,
        pageSize: 5,
      };
      try {
        const { data = {} } = await this.$api.licenseService.getNoticeList(params);
        this.noticeList = data.rows;
      } catch {}
    },
  },
};
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
            color: $primary-color;
          }
        }
      }
      .link {
        cursor: pointer;
        &:hover {
          color: $primary-color;
        }
      }
      padding: 12px 0px;
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
