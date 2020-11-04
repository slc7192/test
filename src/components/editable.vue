<template>
  <div id="app">
    <Button type="info" @click="add" class="butrit">新增</Button>
    <Table border ref="selection" :columns="columns" :data="data6" class="martop"
        @on-select="handleSelect"
        @on-select-cancel="handleCancel"
        @on-select-all="handleSelectAll"
        @on-select-all-cancel="handleSelectAll"
        v-if="pageData.length>0"></Table>
    <Page :total="total" size="small" :page-size="pageNum" :current="pagceIndex" show-total @on-change="change" class="pag" />
    <Modal v-model="modal1" title="修改信息"  @on-ok="ok"  @on-cancel="cancel">
        <Form :model="Fromitem" :label-width="100" class="formodal">
            <FormItem label="姓名:">
                <Input type="text" v-model="Fromitem.input1" />
            </FormItem>
            <FormItem label="年龄:">
                <Input v-model="Fromitem.input2" />
            </FormItem>
            <FormItem label="地址:">
                <Input  v-model="Fromitem.input3" />
            </FormItem>
        </Form>
    </Modal>
  </div>
   
</template>

<script>
    export default {
        data () {
            return {
                modal1: false,
                total:40,//总条数
                pageNum:3,//每页显示数据条数
                pagceIndex:1,//默认第一页
                selectedIds: new Set(),//选中的合并项的id
                selectedSum: 0, //选中的总数量
                columns: [
                     {
                        type: 'selection',
                        width: 60,
                        align: 'center',
                    },
                    {
                        title: '姓名',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '年龄',
                        key: 'age',
                    },
                    {
                        title: '地址',
                        key: 'address',
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                pageData:[
                    {
                        name: '张三',
                        age: 18,
                        address: '河南新乡',
                        id:1
                    },
                    {
                        name: '李四',
                        age: 24,
                        address: '北京',
                        id:2
                    },
                    {
                        name: '王五',
                        age: 30,
                        address: '上海',
                        id:3
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: '杭州',
                        id:4
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: '杭州',
                        id:5
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: '杭州',
                        id:6
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: '杭州',
                        id:7
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: '杭州',
                        id:8
                    }
                ],
                data6: [],
                Fromitem:{
                    input1: '',
                    input2: '',
                    input3: '',
                    cid:''
                }
             
            }
        },
        mounted(){
            this.getList()
        },
        methods: {
            getList(){
                this.total=this.pageData.length;
                this.data6=this.pageData;
                if(this.pagceIndex){
                    this.data6=this.pageData.slice(0, this.pageNum)
                }else{
                    this.change()
                }
            },
            show (index) {
                this.modal1=true;
                this.Fromitem.input1=this.data6[index].name;
                this.Fromitem.input2=this.data6[index].age;
                this.Fromitem.input3=this.data6[index].address;
                this.Fromitem.cid=index;
            },
            remove (index) {
                this.pageData.splice(index,1);  
                this.data6.splice(index,1)
                this.total = this.pageData.length;
            },

            ok () {
                this.$Message.info('已保存');
                let index=this.Fromitem.cid;
                if(index){
                    this.data6[index].name=this.Fromitem.input1;
                    this.data6[index].age=this.Fromitem.input2;
                    this.data6[index].address=this.Fromitem.input3;
                }else{
                    let obj={
                        name:this.Fromitem.input1,
                        age:this.Fromitem.input2,
                        address:this.Fromitem.input3,
                        id:this.pageData.length+1
                    }
                    this.pageData.push(obj);
                    this.total = this.pageData.length;
                }
            },

            cancel () {
                this.$Message.info('已取消');
            },

            add(){
                this.modal1=true;
                for(let key in this.Fromitem){
                    this.Fromitem[key]=''
                }
            },

            //改变页数
            change(index){
                this.pagceIndex = index;
                if (this.pageData.length > this.pageNum) {
                    this.data6 = this.pageData.slice((index - 1) * this.pageNum, index * this.pageNum);
                } else {
                    this.data6 = this.pageData;
                }
                var _that = this;
                //做跨页多选，由于渲染时间的原因，使用setTimeout规避
                setTimeout(function(){
                    _that.setChecked()
                },10)
            },

            //选择某一行
            handleSelect(sleection,row){
                 this.selectedIds.add(row.id)
                 this.selectedSum ++;
            },

            //取消选择某一行
            handleCancel(sleection,row){
                this.selectedIds.delete(row.id);
                this.selectedSum --;
            },

            //改变当前页的行的选中状态
            setChecked () {
                // 找到绑定的table的ref对应的dom，找到table的objData对象，objData保存的是当前页的数据
                let objData = this.$refs.selection.objData
                for (let index in objData) {
                    if (this.selectedIds.has(objData[index].id)) {
                    // this.$refs.purchaseTable.toggleSelect(index) // 在保存选中的ids的set合集里找与当前页数据id一样的行，使用toggleSelect（index），将这一行选中
                         objData[index]._isChecked = true
                    }
                }
            },

           //全选 or 取消全选
            handleSelectAll(slection){
                // 取消全选 数组为空
                if(slection && slection.length === 0){
                    //  若取消全选，删除保存在selectedIds里和当前table数据的id一致的数据，达到，当前页取消全选的效果
                    // 当前页的table数据
                    var data = this.$refs.selection.data;
                    data.forEach((item)=>{
                        if(this.selectedIds.has(item.id)){
                            this.selectedIds.delete(item.id);
                        }
                    })
                }else{
                    console.log(555)
                    slection.forEach((item)=>{
                        this.selectedIds.add(item.id);
                    })
                }
                 this.selectedSum = this.total;
            }

        }
    }
</script>

<style >
   .formodal input{
       color: #515a6e;
   }
  .butrit{
      margin: 20px 95%  20px ;
  }
  .martop{
      margin-top: 20px;
  }
  .pag{
      text-align: center;
      margin-top: 25px;
  }
</style>
