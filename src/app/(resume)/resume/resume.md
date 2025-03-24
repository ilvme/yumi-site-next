# 康佳的简历

## **个人信息**

---

- **我：**康佳 | 男 | Base 天津
- **教育水平：**本科 | 河北大学 | 计算机科学与技术专业 | 2019 年毕业
- **手机 & 微信：**+86 18232110170
- **邮箱：[ikangjia.cn@outlook.com](mailto:ikangjia.cn@outlook.com)**
- **个人主页：[https://ikangjia.cn](https://ikangjia.cn/)**

## 技能清单

---

### **后端**  & DevOps

- 熟练使用 Java 语言，包括但不限于 JavaSE 基础、集合操作、多线程操作、IO操作、反射、注解等知识。熟练使用 Java8+ 语法；了解 JVM 的组成与类加载机制
- 熟练使用 Spring、Spring MVC、Spring Boot 框架，有多个相关项目经验
- 熟练使用常用的中间件，如 Mybatis、Mybatis-Plus、Rabbit MQ、 Spring Data 系列等
- 熟悉数据库的基本概念与 SQL 标准语法，对 MySQL, Redis 等主流数据库有一定了解
- 熟练使用 Linux 系统及 Nginx, Docker 等工具，能够完成项目从开发到部署的整套流程

### Web

- 掌握 HTML + CSS + JavaScript 基本特性，熟练使用 ES6+ 语法
- 熟练使用 Vue 全家桶，包括但不限于 Vuex, Vue Router, Pinia
- 熟练使用主流前端工具库，如 ESLint, Element Plus, NaiveUI, ECharts...
- 了解 React & Next.js 相关生态，在个人项目有应用
- 了解 Node.js 及相关生态，在个人项目有应用

### 团队协作

- 熟练使用 Git，能够践行 Git Flow 工作流；熟练使用 GitHub, GitLab
- 熟练使用 IDEA、Navicat、Postman、XShell、Typora、XMind、ProcessOn 等工具
- 注重代码规范与质量，一直践行阿里的 Java 开发规约，也乐意遵守各种代码规范

## **工作经历**

---

### **2021.06 - 至今 天津南大通用数据技术股份有限公司 | Java 开发 & 前端开发**

任职于天津南大通用总部的数据智能产品研发部门，担任后端开发工程师。主要负责管理后台等项目的开发与维护工作。

⭐ GDOM 数据库运维管理系统 **`SpringBoot`**  **`RocketMQ` `Vue` `ElementPlus`**

本人负责前端开发和部分后端模块实现，待续……

⭐ **GBase 8a MPP 统一数据监控与运维系统  `Spring MVC`  `GBase 8a MPP`  `GDBC`**

这个项目是 GBase 8a MPP 的监控与运维系统。我主要负责其中的数据库管理、SQL 执行器、健康检查、会话任务、SSH 调用操作等模块。

数据库管理：在 Web 页面实现了针对 8a 集群中 VC、库、表、视图、存储过程、数据库用户角色权限等的可视化操作。其中后端设计了 SQL Builder 模块、SQL 执行模块、AOP 数据源管理模块、执行结果处理模块。

SQL 执行器：在 Web 页面实现了输入 SQL 进行操作功能。主要难点是在后端自定义 Map 缓存以及集成定时任务框架实现了限制执行 SQL 的会话数和会话过期策略这一需求。

健康检查：可定制的周期性的对集群、系统的一些指标进行健康度评估。其中周期性调度是基于 Quartz 的动态任务调度模块设计与实现。

### **2019.02 - 2020.04 紫光云技术有限公司 | Java 开发**

任职于数据中台组，在职期间参与了模型设计器、日志服务产品、 DMS 项目等多个核心项目。工作内容包括但不限于后端 API 设计与开发、数据库设计（从逻辑设计、画 E-R 图到库表的建立等）、编写完善开发各个阶段的相关文档。

⭐ **紫光云日志服务产品 （[线上地址](https://www.unicloud.com/app/logservice/)）`Spring Boot` `Mybatis-Plus`  `ELK`  `RabbitMQ`   `企业微信`**

项目描述：一款基于各种规则接入各种软件或系统的日志，进行日志数据采集、消费、投递以及查询分析功能的在线工具。常用于服务运维、运营、安全等场景。

后端技术架构：Spring Boot、Mybatis-Plus、MySQL，此外还涉及 Elastic Search、Rabbit MQ操作以及对接企业微信进行获取联系人信息、发送企业微信信息等。

我负责整个产品后端的开发。这个产品控制台主要功能是：项目管理、日志库管理、日志配置管理、日志告警、ES 存储主索引创建操作等。

1. 根据需求设计整个后端的数据库，建立库、表；
2. 后端开发环境搭建，Spring Boot 集成 Mybatis-Plus 、Druid 数据源连接池、Swagger、Rabbit MQ 等；
3. 设计与前端的 API 接口，设计项目分层与编码开发。鉴于要集成的中间件较多，设计了 manager 层隐藏了对接企业微信、操作 Kibana 等各种纷乱的 Api，对 Service 层直接暴露调用接口，有效保证了代码的质量与整洁。
4. 接收来自 Rabbit MQ 的告警信息，解析处理。一是对接公司的短信、邮件接口发送告警信息，二是调用企业微信相关 API 发送告警信息；
5. 使用 Swagger 结合 Postman 进行接口测试；与前端人员进行对接接口；使用 Sonar 进行静态代码检查以及使用 Jenkins 进行项目打包。

⭐ **数据管理 DMS （[线上地址](https://www.unicloud.com/product/dms)） `Spring Boot`  `JOOQ`   `JDBC`  `MySQL`  `Redis`  `Hive`**

项目描述：一个基于 B-S 架构的数据库管理系统，有点类似于阿里的 DMS 产品

技术架构：Spring Boot、Spring Cloud、JDBC、MySQL。

个人工作：参与部分核心模块开发，前后端联调。

⭐ **模型设计器项目  `Spring Boot`  `Spring Cloud`  `MySQL`**

项目描述：一款 Web 端的类 BI 工具，可使用鼠标拖拽生成关系型数据库映射模型，不写 SQL 也能对数据进行查询和统计。

参与部分核心模块开发、测试以及前后端联调。

### **2018.06—2018.09 大三暑假 保定同升公司 | Java 开发实习**

期间参与了库存管理系统项目的部分模块的前后端实现。

## **自我评价**

---

- 工作负责，解决问题能力强，遇到麻烦时会第一时间寻找解决方案而非抱怨。有一定抗压能力
- 喜欢整洁的桌面，优雅的代码和一目了然的注释，要求自己一定要写出当前能力下质量最高的代码
- 热爱编程，喜欢折腾。有较强的自学能力，乐于接受新知识和新技术，喜欢解决问题后的成就感。喜欢折腾各种软硬件，善于使用能降低心智负担与提升幸福感的生产力工具
- 轻微社恐，但性格随和易相处。注重效率，守时，拒绝拖拉