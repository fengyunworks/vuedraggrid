<template>
  <div
      id="grid-layout-content-wrap"
      :class="['grid-layout-content-wrap',{'draging': isDraging}]"
      v-title data-title="VITE+VUE2+可拖拽部件布局"
  >
    <div style="height:30px">
      <el-button type="success" @click="type =!type" style="float:right;margin:9px" border size="mini">
        {{type?"取消":"自定义布局"}}
      </el-button>
	   <el-button type="success" @click="zhuti" style="float:right;margin:9px" border size="mini">
        切换主题
      </el-button>
    </div>
    <grid-layout
        :layout="layout"
        :col-num="12"
        :row-height="30"
        :is-mirrored="false"
        :vertical-compact="true"
        :margin="[10, 10]"
        :use-css-transforms="true"
        @layout-created="layoutCreatedEvent"
        @layout-before-mount="layoutBeforeMountEvent"
        @layout-mounted="layoutMountedEvent"
        @layout-ready="layoutReadyEvent"
        @layout-updated="layoutUpdatedEvent"
    >
      <grid-item
          v-for="(item, index) in layout"
          :key="item.i"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
          :min-w="item.minW"
          :min-h="5"
          :is-draggable="type ? item.isDraggable : false"
          :is-resizable="type ? item.isResizable : false"
          @resize="resizeEvent"
          @move="moveEvent"
          @resized="resizedEvent"
          @moved="movedEvent"

      >
        <layout-item-container
            :title="item.title"
            icon="item.icon"
            :type="type"
            :operation="item.operation"

        >
          <template slot="delete">
            <el-dropdown
                trigger="hover"
                @select="deleteComponent(item, index)"
            >
              <i class="el-icon-more"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
          <component :is="item.componentName"/>
        </layout-item-container>


      </grid-item>
    </grid-layout>
  </div>
</template>
<script>
import Vue from 'vue';
import layoutItemContainer from './layout-item-container.vue';
import VueGridLayout from 'vue-grid-layout';
import notice from './notice.vue';

Vue.use(VueGridLayout);

const GridLayout = VueGridLayout.GridLayout;
const GridItem = VueGridLayout.GridItem;

export default {
  name: 'DragGrid',
  components: {
    GridLayout,
    GridItem,
    layoutItemContainer,
    notice
  },
  data() {
    return {
      type: false,
      todoList: [],
      messageList: [],
      noticeList: [],
      msgLoading: false,
      todoLoading: false,
      isDraging: false,
      operationOptions: [{
        value: 'delete',
        label: '删除',
      }],
    };
  },
  computed: {
    layout: {
      get() {

        let item = [];
        item = [{
          "componentName": "notice",
          "createBy": null,
          "createTime": null,
          "h": 5,
          "i": "kb",
          "icon": "null",
          "id": "12345678",
          "ifInnerData": "1",
          "isDel": "0",
          "isDraggable": true,
          "isEssential": false,
          "isResizable": true,
          "isSelect": true,
          "maxH": null,
          "maxW": null,
          "minH": 5,
          "minW": 4,
          "title": "部件",
          "updateTime": null,
          "w": 4,
          "x": 8,
          "y": 30,
          "partsId": "12345678",
          "moved": false,
          "operation": ["查看更多"]
        },
          {
            "componentName": "notice",
            "createBy": null,
            "createTime": null,
            "h": 10,
            "i": "kbList",
            "icon": "null",
            "id": "1234567897",
            "ifInnerData": "1",
            "isDel": "0",
            "isDraggable": true,
            "isEssential": false,
            "isResizable": true,
            "isSelect": true,
            "maxH": null,
            "maxW": null,
            "minH": 10,
            "minW": 4,
            "title": "部件",
            "updateTime": null,
            "w": 4,
            "x": 8,
            "y": 20,
            "partsId": "1234567897",
            "moved": false,
            "operation": ["查看更多"]
          },
          {
            "componentName": "notice",
            "createBy": null,
            "createTime": null,
            "h": 10,
            "i": "subscribe",
            "icon": "null",
            "id": "1234567891",
            "ifInnerData": "1",
            "isDel": "0",
            "isDraggable": true,
            "isEssential": false,
            "isResizable": true,
            "isSelect": true,
            "maxH": null,
            "maxW": null,
            "minH": 9,
            "minW": 4,
            "title": "部件",
            "updateTime": null,
            "w": 4,
            "x": 0,
            "y": 24,
            "partsId": "1234567891",
            "moved": false,
            "operation": ["查看更多"],
            "height": 390,
            "width": 520
          },
          {
            "componentName": "notice",
            "createBy": "null",
            "createTime": "null",
            "h": 11,
            "i": "appApply",
            "icon": "null",
            "id": "1234567898",
            "ifInnerData": "1",
            "isDel": "0",
            "isDraggable": true,
            "isEssential": false,
            "isResizable": true,
            "maxH": "null",
            "maxW": "null",
            "minH": 18,
            "minW": 8,
            "title": "部件",
            "updateTime": "null",
            "w": 8,
            "x": 0,
            "y": 13,
            "partsId": "1234567898",
            "moved": false,
            "isSelect": true,
            "operation": ["查看更多"],
            "height": 430,
            "width": 1050
          },
          {
            "componentName": "notice",
            "createBy": null,
            "createTime": null,
            "h": 10,
            "i": "collection",
            "icon": "null",
            "id": "123456789",
            "ifInnerData": "1",
            "isDel": "0",
            "isDraggable": true,
            "isEssential": false,
            "isResizable": true,
            "isSelect": true,
            "maxH": null,
            "maxW": null,
            "minH": 9,
            "minW": 4,
            "title": "部件",
            "updateTime": null,
            "w": 4,
            "x": 4,
            "y": 24,
            "partsId": "123456789",
            "moved": false,
            "operation": ["查看更多"],
            "height": 390,
            "width": 520
          },
          {
            "componentName": "notice",
            "createBy": null,
            "createTime": null,
            "h": 11,
            "i": "messageTodo",
            "icon": null,
            "id": "1234567895",
            "ifInnerData": "1",
            "isDel": "0",
            "isDraggable": true,
            "isEssential": false,
            "isResizable": true,
            "isSelect": false,
            "maxH": null,
            "maxW": null,
            "minH": 10,
            "minW": 4,
            "title": "部件",
            "updateTime": null,
            "w": 4,
            "x": 8,
            "y": 0,
            "partsId": "1234567895",
            "moved": false,
            "operation": ["查看更多"],
            "height": 430,
            "width": 520
          },
          {
            "componentName": "notice",
            "createBy": "null",
            "createTime": "null",
            "h": 4,
            "i": "tool",
            "icon": "null",
            "id": "1234567896",
            "ifInnerData": "1",
            "isDel": "0",
            "isDraggable": true,
            "isEssential": false,
            "isResizable": true,
            "isSelect": true,
            "maxH": null,
            "maxW": null,
            "minH": 4,
            "minW": 4,
            "title": "部",
            "updateTime": null,
            "w": 8,
            "x": 0,
            "y": 9,
            "partsId": "1234567896",
            "moved": false,
            "operation": ["查看更多"],
            "height": 30,
            "width": 520
          },
          {
            "componentName": "notice",
            "createBy": null,
            "createTime": null,
            "h": 9,
            "i": "access",
            "id": "123456",
            "ifInnerData": "1",
            "isDel": "0",
            "isDraggable": true,
            "isEssential": false,
            "isResizable": true,
            "isSelect": true,
            "maxH": null,
            "maxW": null,
            "minH": 7,
            "minW": 6,
            "title": "部件",
            "updateTime": null,
            "w": 8,
            "x": 0,
            "y": 0,
            "partsId": "123456",
            "operation": ["查看更多"],
            "moved": false
          },
          {
            "componentName": "notice",
            "h": 9,
            "i": "noticeMessage",
            "icon": null,
            "isDraggable": true,
            "isEssential": false,
            "isResizable": true,
            "isSelect": true,
            "maxH": null,
            "maxW": null,
            "minH": 10,
            "minW": 4,
            "title": "部件",
            "updateTime": null,
            "w": 4,
            "x": 8,
            "y": 11,
            "moved": false,
            "height": 350,
            "width": 461,
            "operation": ["查看更多"]
          }
        ]

        return item;


      },
      set(val) {
        this.$emit('update:layoutList', val);
      },
    },
  },
  mounted() {

  },
  methods: {
    // 拖拽相关方法
    layoutCreatedEvent(newLayout) { // 对应Vue生命周期的created
      // console.log('Created layout: ', newLayout);
    },
    layoutBeforeMountEvent(newLayout) { // 对应Vue生命周期的beforeMount
      // console.log('beforeMount layout: ', newLayout);
    },
    layoutMountedEvent(newLayout) { // 对应Vue生命周期的mounted
      // console.log('Mounted layout: ', newLayout);
    },
    layoutReadyEvent(newLayout) { // 当完成mount中的所有操作时生成的事件
      // console.log('Ready layout: ', newLayout);
    },
    layoutUpdatedEvent(newLayout) { // 更新事件（布局更新或栅格元素的位置重新计算）
      this.isDraging = false;
      this.layout = newLayout;
      // console.log('Updated layout: ', newLayout);
    },
    moveEvent(i, newX, newY) { // 移动时的事件
      this.isDraging = true;
      // console.log('MOVE i=' + i + ', X=' + newX + ', Y=' + newY, 'move start');
    },
    resizeEvent(i, newH, newW, newHPx, newWPx) { // 调整大小时的事件
      // console.log('RESIZE i=' + i + ', H=' + newH + ', W=' + newW + ', H(px)=' + newHPx + ', W(px)=' + newWPx);
    },
    movedEvent(i, newX, newY) { //  移动后的事件
      this.isDraging = false;
      // console.log('MOVED i=' + i + ', X=' + newX + ', Y=' + newY, 'move end');
    },
    /**
     *
     * @param i the item id/index
     * @param newH new height in grid rows
     * @param newW new width in grid columns
     * @param newHPx new height in pixels
     * @param newWPx new width in pixels
     *
     */
    resizedEvent(i, newH, newW, newHPx, newWPx) { // 调整大小后的事件
      // console.log('RESIZED i=' + i + ', H=' + newH + ', W=' + newW + ', H(px)=' + newHPx + ', W(px)=' + newWPx);
      const index = this.layout.findIndex(item => {
        return item.i === i;
      });
      this.$set(this.layout[index], 'height', newHPx);
      this.$set(this.layout[index], 'width', newWPx);
    },
    deleteComponent(item, index) {
      this.$emit('deleteLayOutItem', index, item);
    },
    // 获取消息列表
    async getMessage(type) {
      if (type === 1) {
        this.msgLoading = true;
      } else {
        this.todoLoading = true;
      }
      const params = {
        status: 0,
        type,
        currentPage: 1,
        pageSize: 5,
        excludeSubTypes: type === 1 ? 114 : null,
        subTypes: type !== 1 ? 114 : null,
        showContent: true,
      };
      const {data = {}} = await this.$api.licenseService.getMessage(params);
      const message = data.rows || [];
      if (type === 1) {
        this.messageList = message;
        this.msgLoading = false;
      } else {
        this.todoList = message;
        this.todoLoading = false;
      }
    },
    // 已读之后重新请求消息数据
    refresh(type) {
      this.getMessage(type);
    },
    refreshNotice() {

    }
  },
};
</script>
<style lang="scss">
.vue-grid-layout {
  width: 100%;

  .vue-grid-item {
    // border: 1px solid #e6eaee;
    background: #fff;
    border-radius: 3px;
    display: flex;
    /* box-shadow:0px 4px 6px 0px rgba(0,0,0,0.07); */
    border: 1px solid #e6e5e5;
    border-radius: 4px;

    &:hover {
      box-shadow: 4px 4px 5px 0 rgba(0, 0, 0, 0.07);
    }

    .vue-grid-placeholder {
      background: red;
      opacity: 0.2;
      -webkit-transition-duration: 0.1s;
      transition-duration: 0.1s;
      z-index: 2;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      -o-user-select: none;
      user-select: none;
    }

    .close-icon {
      position: absolute;
      right: 0;
      top: 0;
      cursor: pointer;
    }
  }
}

#grid-layout-content-wrap {
  width: 100%;
  background: rgba(0, 0, 0, 0.05);

  &.draging {
    border: 1px dashed #ccc;
  }
}
</style>
