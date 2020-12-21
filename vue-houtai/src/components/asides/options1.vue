<template>
  <div>
    <el-card>
      <el-row type="flex" align="middle" style="height:55px">
        <el-col :span="5">
          示例表格
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" class="marginTop">
        <el-col>
          <el-table
            border
            :data="listData"
            stripe
            :cell-style="{'text-align':'center'}"
            :header-cell-style="{'text-align':'center'}"
            :row-style="{'height':'50px'}"
          >
            <el-table-column prop="id" label="#" width="90px"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="role" label="权限"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button @click="editClick(scope.row)" size="small" type="primary">编辑</el-button>
                <el-button size="small" type="danger">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <!--  分页  -->
      <el-row class="marginTop">
        <el-col>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </el-col>
      </el-row>

    </el-card>
  </div>
</template>

<script>
export default {
  name: 'options1',
  data () {
    return {
      // 表格数据
      listData: [
        {
          id: 1,
          name: '张三',
          role: '高级管理员'
        },
        {
          id: 2,
          name: '张三',
          role: '高级管理员'
        },
        {
          id: 3,
          name: '张三',
          role: '高级管理员'
        }, {
          id: 4,
          name: '张三',
          role: '高级管理员'
        }
      ],

      // 当前显示的页
      currentPage: 1

    }
  },
  methods: {
    // 编辑函数
    editClick (item) {
      console.log(item)
    },

    // 每页显示数据条数函数
    handleSizeChange () {},

    // 选中页数函数
    handleCurrentChange () {}
  }
}
</script>

<style scoped lang="scss">
/*每行的间距样式*/
.marginTop {
  margin-top: 15px;
}
</style>
