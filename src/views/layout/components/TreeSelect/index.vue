<template>
  <div class="theme1 site-tree">
    <div class="search">
      <i class="iconfont" :class="`icon-${pin}`" @click="loosen(pin)"></i>
      <span class="focus-tree">关注树</span>
      <el-select :popper-append-to-body="false" class="select-box" @change="selected" size="small" v-model="value" clearable filterable remote reserve-keyword placeholder="请输入关键词" :remote-method="remoteMethod" :loading="loading">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="el-tree-box">
      <el-scrollbar style="height:100%;">
        <el-tree ref="tree" highlight-current auto-expand-parent :data="treeData" :default-expanded-keys="defaultKeys" node-key="deptId" :props="defaultProps" @node-click="selectTree">
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span class="justify">
              <span v-if="data.level == '1'">
                <i class="iconfont icon-sides"></i>
              </span>
              <span v-if="data.level == '2'">
                <i class="iconfont icon-patrol"></i>
              </span>
              <span v-if="data.level == '3'">
                <i class="iconfont icon-DMA"></i>
              </span>
              <el-tooltip class="item" effect="light" placement="top-end" :open-delay="1500">
                <div slot="content">{{node.label}}</div>
                <span class="node-label">
                  {{ node.label }}
                </span>
              </el-tooltip>
            </span>
          </span>
        </el-tree>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import { treeFormat } from './common.js'
export default {
  name: 'siteTree',
  data() {
    return {
      defaultProps: {
        children: 'children',
        label: 'alias'
      }, // 组织树数据格式化
      treeData: [], // 组织树数据
      options: [], // 组织树过滤
      value: [],
      list: [], // 前端过滤列表
      loading: false,
      states: [], // 前端备份组织树数据
      defaultKeys: [], // 默认选中节点
      pin: 'pin' // 固定或滑动图标状态
      // station: true
    }
  },
  props: {
    // 父组件传入图标状态
    fixed: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    getTreeData() {
      const res = {
        data: [
          {
            'id': 1,
            'parentId': 0,
            'deptId': '004',
            'name': '广州自来水公司',
            'alias': '广州自来水公司',
            'level': '1',
            'collect': 1,
            'flag': 'root'
          },
          {
            'id': 2,
            'parentId': '004',
            'deptId': '004010',
            'name': '中区营管所大坦沙区',
            'alias': '中区营管所大坦沙区',
            'level': '2',
            'collect': 1,
            'flag': 'areas'
          },
          {
            'id': 4,
            'parentId': '004010',
            'deptId': '004010002',
            'name': '2#东海北路片区',
            'alias': '2#东海北路片区',
            'level': '3',
            'collect': 1,
            'flag': 'areas'
          },
          {
            'id': 5,
            'parentId': '004010',
            'deptId': '004010003',
            'name': '3#市一中片区',
            'alias': '3#市一中片区',
            'level': '3',
            'collect': 1,
            'flag': 'areas'
          },
          {
            'id': 6,
            'parentId': '004010',
            'deptId': '004010004',
            'name': '4#河沙东街片区',
            'alias': '4#河沙东街片区',
            'level': '3',
            'collect': 1,
            'flag': 'areas'
          },
          {
            'id': 7,
            'parentId': '004010',
            'deptId': '004010005',
            'name': '5#东海南路片区',
            'alias': '5#东海南路片区',
            'level': '3',
            'collect': 1,
            'flag': 'areas'
          },
          {
            'id': 8,
            'parentId': '004010',
            'deptId': '004010006',
            'name': '6#桥中中路坦尾西路片区',
            'alias': '6#桥中中路坦尾西路片区',
            'level': '3',
            'collect': 1,
            'flag': 'areas'
          },
          {
            'id': 9,
            'parentId': '004010',
            'deptId': '004010007',
            'name': '7#西海南路片区',
            'alias': '7#西海南路片区',
            'level': '3',
            'collect': 1,
            'flag': 'areas'
          },
          {
            'id': 10,
            'parentId': '004010',
            'deptId': '004010008',
            'name': '8#海角红楼片区',
            'alias': '8#海角红楼片区',
            'level': '3',
            'collect': 1,
            'flag': 'areas'
          },
          {
            'id': 11,
            'parentId': '004010',
            'deptId': '004010009',
            'name': '9#桥中南路片区',
            'alias': '9#桥中南路片区',
            'level': '3',
            'collect': 1,
            'flag': 'areas'
          },
          {
            'id': 12,
            'parentId': '004010',
            'deptId': '004010010',
            'name': '10#坦尾村片区',
            'alias': '10#坦尾村片区',
            'level': '3',
            'collect': 1,
            'flag': 'areas'
          },
          {
            'id': 13,
            'parentId': '004',
            'deptId': '004013',
            'name': '北区供水分公司白云片',
            'alias': '北区供水分公司白云片',
            'level': '2',
            'collect': 1,
            'flag': 'areas'
          },
          {
            'id': 14,
            'parentId': '004013',
            'deptId': '004013001',
            'name': '同泰路(松园山庄)0002274717',
            'alias': '同泰路(松园山庄)0002274717',
            'level': '3',
            'collect': 1,
            'flag': 'areas'
          },
          {
            'id': 15,
            'parentId': '004013',
            'deptId': '004013002',
            'name': '西槎路同德围（D座1-9）0004946247',
            'alias': '西槎路同德围（D座1-9）0004946247',
            'level': '3',
            'collect': 1,
            'flag': 'areas'
          },
          {
            'id': 16,
            'parentId': '004013',
            'deptId': '004013003',
            'name': '机场路华明街0005094181',
            'alias': '机场路华明街0005094181',
            'level': '3',
            'collect': 1,
            'flag': 'areas'
          },
          {
            'id': 17,
            'parentId': '004013',
            'deptId': '004013004',
            'name': '白云区永泰村集贤庄西侧0004952770',
            'alias': '白云区永泰村集贤庄西侧0004952770',
            'level': '3',
            'collect': 1,
            'flag': 'areas'
          },
          {
            'id': 18,
            'parentId': '004013',
            'deptId': '004013005',
            'name': '大金钟路104-128号广州市公安局4956886',
            'alias': '大金钟路104-128号广州市公安局4956886',
            'level': '3',
            'collect': 1,
            'flag': 'areas'
          },
          {
            'id': 19,
            'parentId': '004013',
            'deptId': '004013006',
            'name': '白云区永泰村集贤庄西侧0004952754',
            'alias': '白云区永泰村集贤庄西侧0004952754',
            'level': '3',
            'collect': 1,
            'flag': 'areas'
          },
          {
            'id': 20,
            'parentId': '004013',
            'deptId': '004013007',
            'name': '白云区同和镇永泰村牛岭山傍0005107357',
            'alias': '白云区同和镇永泰村牛岭山傍0005107357345435234234',
            'level': '3',
            'collect': 1,
            'flag': 'areas'
          }
        ]
      }
      this.treeData = treeFormat(res.data, 'deptId', 'parentId')
      this.states = res.data
    },
    selectTree(data, node) {
      this.$emit('selectNode', { data, node })
    },
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options = this.list.filter(item => {
            return item.label.toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options = []
      }
    },
    selected(e) {
      this.$refs.tree.setCurrentKey(e)
      this.defaultKeys = [e]
      const data = this.$refs.tree.getCurrentNode()
      const node = this.$refs.tree.getNode(data)
      this.$emit('selectNode', { data, node })
    },
    loosen() {
      if (this.pin === 'pin') {
        this.pin = 'pin1'
      } else {
        this.pin = 'pin'
      }
      this.$emit('shrink', this.pin)
    }
  },
  mounted() {
    this.getTreeData()
    this.list = this.states.map(item => {
      return { value: item.deptId, label: item.alias, flag: item.flag }
    })
  },
  watch: {
    fixed() {
      if (this.fixed) {
        this.pin = 'pin'
      } else {
        this.pin = 'pin1'
      }
    }
  }
}

</script>
<style lang="scss" scoped>
.search {
  padding: 40px 20px 20px 20px;
  .focus-tree {
    border: solid 1px #2797ff;
    border-radius: 4px;
    padding: 6px 10px;
  }
  .iconfont{
    font-size: 24px;
    color: #10cfbd;
    position: absolute;
    top: 10px;
  }
  .el-select{
    width: 240px;
  }
}
.el-tree-box {
  height: calc(100% - 92px);
  .el-tree {
    padding: 0 20px 20px;
  }
}
.site-tree {
  width: 360px;
  height: 100%;
  border: solid 1px #d8dce5;
  border-top: solid 0;
  margin: 0 auto;
}
.node-label {
  width: 250px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  padding-left: 4px;
}
.justify {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

