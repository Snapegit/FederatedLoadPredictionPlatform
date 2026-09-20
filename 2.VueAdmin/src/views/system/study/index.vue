<template>
    <div>
      <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
        <el-form-item label="模型选择" prop="field103">
          <el-select v-model="formData.field103" placeholder="请选择模型" clearable :style="{width: '100%'}">
            <el-option v-for="(item, index) in field103Options" :key="index" :label="item.label"
              :value="item.value" :disabled="item.disabled"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="数据集选择" prop="field102">
          <el-select v-model="formData.field102" placeholder="请选择数据集" clearable :style="{width: '100%'}">
            <el-option v-for="(item, index) in field102Options" :key="index" :label="item.label"
              :value="item.value" :disabled="item.disabled"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="参数设置" prop="field105">
          <el-input v-model="formData.field105" placeholder="参数设置" clearable :style="{width: '100%'}">
          </el-input>
        </el-form-item>
        <el-form-item size="large">
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  <script>
  export default {
    components: {},
    props: [],
    data() {
      return {
        formData: {
          field103: undefined,
          field102: undefined,
          field105: undefined,
        },
        rules: {
          field103: [],
          field102: [],
          field105: [],
        },
        field103Options: [{
          "label": "LSTM",
          "value": "LSTM"
        }, {
          "label": "CNN",
          "value": "CNN"
        }, {
          "label": "SADMM-LSTM",
          "value": "SADMM-LSTM"
        }, {
          "label": "SADMM-LSTM",
          "value": "SADMM-LSTM"
        }],
        field102Options: [{
          "label": "数据集A",
          "value": "数据集A"
        }, {
          "label": "数据集B",
          "value": "数据集B"
        }, {
          "label": "数据集C",
          "value": "数据集C"
        }, {
          "label": "数据集D",
          "value": "数据集D"
        }],
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {
      submitForm() {
        this.$refs['elForm'].validate(valid => {
          if (!valid) return
          // TODO 提交表单
        })
      },
      resetForm() {
        this.$refs['elForm'].resetFields()
      },
    }
  }
  
  </script>
  <style>
  </style>
  