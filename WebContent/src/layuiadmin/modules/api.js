layui.define(function (exports) {

    //  Boss



    /**
     *  : 生产环境地址
     */
    // var url = 'http://39.98.229.57:9090/dwart/boss';
    // var restUrl = 'http://39.98.198.196:9090/dwart/rest';
    // var syncUrl ='http://47.92.235.188:8080/dwart/sync';
    // var reportUrl = 'http://39.98.198.196:11003';
    // var retailUrl = 'http://39.98.198.196:11004'; // 分销管理访问地址
    // var commUrl = 'http://39.98.198.196:11005';  // 配置当课评价
    // var orderUrl = 'http://39.98.198.196:11007';   // 双12活动销售报表

    /**
     *  : 测试环境地址
     */
    var url = 'http://183.215.122.144:18080/dwart/boss';  // 测试环境
    var restUrl = 'http://183.215.122.144:18080/dwart/rest'; // 测试环境
    var syncUrl = 'http://183.215.122.144:18080/dwart/sync'; // 测试环境
    var reportUrl = 'http://183.215.122.144:11003';    //  报表
    // var retailUrl = "http://183.215.122.144:11004"; //分销管理访问地址
    var commUrl = 'http://183.215.122.144:11005';   // 配置当课评价
    var orderUrl = 'http://183.215.122.144:11007';
    /**
     *  : 开发环境地址
     *  ：金党浩
     */
    // var url = 'http://192.168.20.139:9090/dwart/boss';
    // var restUrl = 'http://192.168.20.139:8082/dwart/rest';
    // var syncUrl = 'http://192.168.20.139:6688/dwart/sync';
    // var reportUrl = 'http://192.168.20.139:11003';
    // var retailUrl = 'http://192.168.20.139:11005';
    // var commUrl = 'http://192.168.20.139:11005';
    // var orderUrl = 'http://192.168.20.139:11007';   // 业务报表
    /**
     * 报表, 覃明辉
     */
    // var reportUrl = 'http://192.168.20.211:11003';


    /**
     *  : 开发环境地址
     *  ：陶千禧
     */
    // var url = 'http://192.168.20.156:9090/dwart/boss';
    // var restUrl = 'http://192.168.20.156:7444/dwart/rest';
    // var syncUrl = 'http://192.168.20.156:3344/dwart/sync';
    // var reportUrl = 'http://192.168.20.156:11003';

    /**
     *  : 开发环境地址
     *  ：黎家旺
     */
    // var url = 'http://192.168.20.20:9090/dwart/boss';
    // var restUrl = 'http://192.168.20.20:8082/dwart/rest';
    // var syncUrl = 'http://192.168.20.20:3344/dwart/sync';
    // var reportUrl = 'http://192.168.20.20:11003';
    var retailUrl = "http://192.168.20.13:11004"; //分销管理访问地址
    // var orderUrl = 'http://192.168.20.13:11007'; //订单管理


    // var restUrl = 'http://192.168.20.111:7444/dwart/rest';
    // var syncUrl = 'http://192.168.20.111:3344/dwart/sync';
    // var url = 'http://localhost:9090/dwart/boss';
    // var restUrl = 'http://localhost:7444/dwart/rest';

    // var url = 'http://localhost:9090/dwart/boss'
    // var restUrl = 'http://localhost:8081/dwart/rest'
    /*var url = 'http://bossapi.dwhs.cn/dwart/boss'
    var restUrl = 'http://restapi.dwhs.cn/dwart/rest'*/

    /*var url = 'http://127.0.0.1:8085/dwart/boss'addListPhoto
    var restUrl = 'http://restapi.dwhs.cn/dwart/rest'*/

    // console.log("api base url =>" + layui.setter.base)
    exports('api', {
        CamSubjectIdsController:{
            camIdsInfo: orderUrl + '/CamSubjectIdsController/CamIdsInfo',
            SubIdsInfo: orderUrl + '/CamSubjectIdsController/SubIdsInfo',
            CamInfos: orderUrl+'/CamSubjectIdsController/CamInfos',
            editCam: orderUrl+'/CamSubjectIdsController/editCam',
            subject: orderUrl+'/SubjectInfoController/subject',
            SubInfos: orderUrl+'/CamSubjectIdsController/SubInfos',
            editSub: orderUrl+'/CamSubjectIdsController/editSub',
            listAres: orderUrl+'/DeCampusController/listAres',
            listSubject: orderUrl+'/SubjectInfoController/listSubject',
            listCams: orderUrl+'/DeCampusController/listCams',
            CamsInfo: orderUrl+'/DeCampusController/CamsInfo',
            knowledgeInfos: orderUrl+'/KnowledgeInfoController/knowledgeInfos',
            listOperateInfo: orderUrl+'/OperateInfoController/listOperateInfo',
            orderReportInquiry: orderUrl+'/order/orderReportInquiry',
            listShift: orderUrl+'/KnOpdetailsController/listShift',
            listTea: orderUrl+'/KnOpdetailsController/listTea',
            listknopInfos: orderUrl+'/KnOpdetailsController/listknopInfos',
            newStuentInfo: orderUrl+'/StudentInfoController/newStuentInfo',
            belogerInfo: orderUrl+'/StudentInfoController/belogerInfo',
            oldStuentInfo: orderUrl+'/StudentInfoController/oldStuentInfo',
            oldsubjectInfo: orderUrl+'/StudentInfoController/oldsubjectInfo',
            newshiftInfo: orderUrl+'/StudentInfoController/newshiftInfo',
            oldshiftInfo: orderUrl+'/StudentInfoController/oldshiftInfo',
            subjectInfo: orderUrl+'/StudentInfoController/subjectInfo',
            newsubjectInfo: orderUrl+'/StudentInfoController/newsubjectInfo',
            teacherInfo: orderUrl+'/StudentInfoController/teacherInfo',
            subjectInfos: orderUrl+'/StudentInfoController/subjectInfos',
            campusInfos: orderUrl+'/StudentInfoController/campusInfos',
            oldStudentInfo: orderUrl+'/StudentInfoController/oldStudentInfo',
            showPerformanceOwner: orderUrl+'/order/showPerformanceOwner',
        },
        BusinessReportController: {
            exportOld: orderUrl + '/BusinessReportController/exportOld',
            exportOldCam: orderUrl + '/BusinessReportController/exportOldCam',
            exportOldSub: orderUrl + '/BusinessReportController/exportOldSub',
            exportOldTeas: orderUrl + '/BusinessReportController/exportOldTeas',
            exportOldStu: orderUrl + '/BusinessReportController/exportOldStu',
            exportNewStu: orderUrl + '/BusinessReportController/exportNewStu',
            exportOper: orderUrl + '/BusinessReportController/exportOper',
            exportKnow: orderUrl + '/BusinessReportController/exportKnow',
            exportKnOpInfo: orderUrl + '/BusinessReportController/exportKnOpInfo',
            exportCamConfiguration: orderUrl + '/BusinessReportController/exportCamConfiguration',
            exportSubConfiguration: orderUrl + '/BusinessReportController/exportSubConfiguration',
        },
        OperateInfoController: {
            allSubCount: orderUrl + '/OperateInfoController/allSubCount',
            allSubOldCount: orderUrl + '/OperateInfoController/allSubOldCount',
            allSubNewCount: orderUrl + '/OperateInfoController/allSubNewCount',
            subNumInfo: orderUrl + '/StudentInfoController/subNumInfo',
            order: orderUrl + '/order/exportExcel/order',
        },
        DeCampusController:{
            campus: orderUrl + '/DeCampusController/Campus',
        },
        Index: {
            submitReadMsgEvent: restUrl + '/teacher/TeacherService/submitReadMsgEvent',
            listHomeShortcutMenu: url + '/menu/menuService/listHomeShortcutMenu',
            addHomeShortcutMenu: url + '/menu/menuService/addHomeShortcutMenu',
            listHomeShortcutMenuByUserId: url + '/menu/menuService/listHomeShortcutMenuByUserId',
            listUnReadMsgInfoOfUserForPage: restUrl + '/teacher/TeacherService/listUnReadMsgInfoOfUserForPage',
            listMsgInfoOfUserForPage: restUrl + '/teacher/TeacherService/listMsgInfoOfUserForPage',
            //消息批量已读
            submitBatchReadMsgEvent: restUrl + '/teacher/TeacherService/submitBatchReadMsgEvent',
            //首页报表
            getHomeCourseWareRsp: url + '/home/homeReportService/getHomeCourseWareRsp',
            getHomeLessonCommentRsp: url + '/home/homeReportService/getHomeLessonCommentRsp',
            getHomePrepareRsp: url + '/home/homeReportService/getHomePrepareRsp',
            getHomeClassroomRsp: url + '/home/homeReportService/getHomeClassroomRsp',
            getHomeXyAuditRsp: url + '/home/homeReportService/getHomeXyAuditRsp',
            getHomeWorksAuditRsp: url + '/home/homeReportService/getHomeWorksAuditRsp',
            getHomeCommentP2TRsp: url + '/home/homeReportService/getHomeCommentP2TRsp',
        },

        commentT2: {
            commentT2: url + '/commentT2/CommentT2Service/commentT2',
            commentT3:commUrl+'/PTInfoController/listPTInfo'
        },

        // 日期
        weekService: {
            weekD: url + '/week/weekService/weekD',
        },

        //报表服务
        ReportService: {
            T2SAndP2T: url + '/report/rTeEvStCommentService/T2SAndP2T',
            Wxurl: url + '/report/rTeEvStCommentService/Wxurl',

            //备课小样审核时效
            LessonAuditQuery: url + '/report/reportService/LessonAuditQuery',
            FinalAuditQuery: url + '/report/reportService/FinalAuditQuery',
            ReviewAuditQuery: url + '/report/reportService/ReviewAuditQuery',
            // 课件学习情况
            lessonPrepareQuery: url + '/report/reportService/lessonPrepareQuery',
            //老师评价学生
            CommentT2SQuery: url + '/report/reportService/CommentT2SQuery',
            RTeEvStQuery: url + '/report/rTeEvStCommentService/RTeEvStQuery ',
            getRptT2CDetail: url + '/report/reportService/getRptT2CDetail',

            LessonPrepareDQuery: url + '/report/reportService/LessonPrepareDQuery',
            statisticalReports: url + '/preparing/PreparingServcie/statisticalReports',

            //创课统计
            coursewareQuery: url + '/report/reportService/coursewareQuery',
            //创课
            getRptCourseDetail: url + '/report/reportService/getRptCourseDetail',

            //课件研究反馈
            CommentT2CQuery: url + '/report/reportService/CommentT2CQuery',
            getRptLessonDetail: url + '/report/reportService/getRptLessonDetail',

            //课堂作品
            WorkQuery: url + '/report/reportService/WorkQuery',
            RWorkQuery: url + '/report/rWorkCommentService/RWorkQuery',
            listImg: url + '/report/rWorkCommentService/listImg',

            //家长评价老师
            CommentP2TQuery: url + '/report/reportService/CommentP2TQuery',
            CommentP2TDQuery: url + '/report/reportService/CommentP2TDQuery',
            commListShift:commUrl+'/PTInfoController/listShift',
            commListInfo:commUrl+'/PTInfoController/listPTDetails',


            // 备课情况 -- 老师详情
            getRptPrepareDetail: url + '/report/reportService/getRptPrepareDetail',
            rptPrepareDetail: url + '/preparing/PreparingServcie/rptPrepareDetail',
            listShift: url + '/report/rTeEvStCommentService/listShift',

            // 文件上传
            classEva: url + '/report/rWorkCommentService/classEva',
            decoderBase64Excel: url + '/preparing/PreparingExcelService/decoderBase64Excel',

            // 微信学员绑定
            getStudentInfoReport: reportUrl + '/studentInfoReportController/getStudentInfoReport',
            exportExcel: reportUrl + '/studentInfoReportController/exportExcel',

            // 备课小样初审
            getVerifyStudentWorkReport: reportUrl + '/verifyStudentWorkController/getVerifyStudentWorkReport',
            exportVerifyStudentWorkExcel: reportUrl + '/verifyStudentWorkController/exportVerifyStudentWorkExcel',
            getStudentWorkInfo: reportUrl + '/verifyStudentWorkController/getStudentWorkInfo',

            // 备课情况
            preparing: reportUrl + '/studentInfoReportController/preparing',

            // 老师评价学生
            exportExcel2: reportUrl + '/rTeEvStCommentService/exportExcel',

            // 备课小样审核时效
            getVerifyPrepareDemo: reportUrl +'/verifyPrepareDemoReportController/getVerifyPrepareDemo',
            getVerifyPrepareInfoDemo: reportUrl +'/verifyPrepareDemoReportController/getVerifyPrepareInfoDemo',

            // 老师评价学生
            exportExcelTe: reportUrl + '/rTeEvStCommentService/exportExcelTe',
            // 课堂作品：
            exportExcelSt: reportUrl + '/rTeEvStCommentService/exportExcelSt',
            commentT2Excel: reportUrl + '/commentT2Controller/commentT2Excel',

            // 报表数据上传下载接口
            exportDefaultExcel: reportUrl + '/ExportController/export',
            isAdmin: reportUrl + '/studentInfoReportController/isAdmin',
        },

        LessonPackService: {
            listLessonPackByLessonId: url + '/lesson/LessonPackService/listLessonPackByLessonId',
            saveLessonPack: url + '/lesson/LessonPackService/saveLessonPack',
            lessonPackSort: url + '/lesson/LessonPackService/lessonPackSort',
            delete:url+'/lesson/LessonPackService/delete'
        },

        AuditService: {
            listAuditConf: url + '/audit/auditService/listAuditConf',
            saveAuditConf: url + '/audit/auditService/saveAuditConf',
            updateAuditConf: url + '/audit/auditService/updateAuditConf'
        },

        //系统设置相关服务
        SysConfigService: {
            saveStandardSetting: url + '/sys/sysConfigService/saveStandardSetting',
            listStandardSetting: url + '/sys/sysConfigService/listStandardSetting',
            updateCommitUpdateTime: url + '/sys/sysConfigService/updateCommitUpdateTime',
            getCommitUpdateTime: url + '/sys/sysConfigService/getCommitUpdateTime',
            listHbkConfig: url + '/sys/sysConfigService/listHbkConfig',
            saveOrUpdateHbk: url + '/sys/sysConfigService/saveOrUpdateHbk',
            listXgjAccount: url + '/sys/sysConfigService/listXgjAccount',
            saveOrUpdateXgjAccount: url + '/sys/sysConfigService/saveOrUpdateXgjAccount',
            listCampus: url + '/sys/sysConfigService/listCampus',
            addCampusBind: url + '/sys/sysConfigService/addCampusBind',
            unbindCampus: url + '/sys/sysConfigService/unbindCampus',
            synch:restUrl+'/sync/SyncOpenService/addSyncTaskOfAppId'
        },

        UserService: {
            listUser: url + '/user/userService/listUser',
            resetPassWord: url + '/user/userService/resetPassWord',
            changeUserState: url + '/user/userService/changeUserState',
            listRoleUserByRoleId: url + '/user/userService/listRoleUserByRoleId',
            listUserByCondition: url + '/user/userService/listUserByCondition',
        },

        OrgService: {
            listAllOrgTree: url + '/org/orgService/listAllOrgTree',
            listAllCampus: url + '/org/orgService/listAllCampus',
            listCampusOrg: url + '/org/orgService/listCampusOrg',
            listAllOrgTreeByAuditConfigId:url+'/org/orgService/listAllOrgTreeByAuditConfigId',
        },

        MenuService: {
            listMenuTree: url + '/menu/menuService/listMenuTree',
            listMenuTreeByRole: url + '/menu/menuService/listMenuTreeByRole',
            createMenu: url + '/menu/menuService/createMenu',
            updateMenu: url + '/menu/menuService/updateMenu',
            deleteMenuByIds: url + '/menu/menuService/deleteMenuByIds',
            listHomeMenu: url + '/menu/menuService/listHomeMenu'
        },

        RoleService: {
            listRoles: url + '/role/RoleService/listRoles',
            removeRoles: url + '/role/RoleService/removeRoles',
            createRole: url + '/role/RoleService/createRole',
            updateRole: url + '/role/RoleService/updateRole',
            addRoleMenu: url + '/role/RoleService/addRoleMenu',
            addRoleUser: url + '/role/RoleService/addRoleUser',
            addRoleAuth: url + '/role/RoleService/addRoleAuth',
        },
        DimensionService: {
            createDimension: url + '/dimension/DimensionService/createDimension',
            listDimension: url + '/dimension/DimensionService/listDimension',
            getDimension: url + '/dimension/DimensionService/getDimension',
            delete: url + '/dimension/DimensionService/delete',
            updateDimension: url + '/dimension/DimensionService/updateDimension'
        },
        ShiftService: {
            listShift: url + '/shift/ShiftService/listShift',
            addSubject: url + '/shift/ShiftService/addSubject',
            updateShift: url + '/shift/ShiftService/updateShift',
            listShiftCode: url + '/shift/ShiftService/listShiftCode',
            getShiftCode: url + '/shift/ShiftService/getShiftCode'
        },

        SubjectService: {
            listBasicSubject: url + '/subject/SubjectService/listBasicSubject',
            updateSubjectExamPaper: url + '/subject/SubjectService/updateSubjectExamPaper',
        }
        /**活动*/
        , ActivityService: {
            listActivity: url + '/activity/ActivityService/listActivity',
            removeActivity: url + '/activity/ActivityService/removeActivity',
            createActivity: url + '/activity/ActivityService/createActivity',
            updateActivity: url + '/activity/ActivityService/updateActivity',
            getActivity: url + '/activity/ActivityService/getActivity',
            cloneActivity: url + '/activity/ActivityService/cloneActivity'
        }
        /**试卷*/
        , ExamService: {
            listExam: url + '/exam/ExamService/listExam',
            removeExam: url + '/exam/ExamService/removeExam',
            createExam: url + '/exam/ExamService/createExam',
            updateExam: url + '/exam/ExamService/updateExam',
            getExam: url + '/exam/ExamService/getExam',
            listQuestion: url + '/exam/ExamService/listQuestion',
            removeQuestion: url + '/exam/ExamService/removeQuestion',
            createQuestion: url + '/exam/ExamService/createQuestion',
            updateQuestion: url + '/exam/ExamService/updateQuestion',
            getQuestion: url + '/exam/ExamService/getQuestion',
            importQuestion: url + '/exam/ExamService/importQuestion',
            getExamExtend: url+'/exam/ExamService/getExamExtend'
        },

        /**
         * 课件服务
         */
        LessonCoursewareService: {
            listCourseWare: url + '/courseware/courseService/listCourseWare',
            createCourseWare: url + '/courseware/courseService/createCourseWare',
            getCourseWare: url + '/courseware/courseService/getCourseWare',
            getCourseWareOrderByResourceName: url + '/courseware/courseService/getCourseWare',
            listAuditCourseWare: url + '/courseware/courseService/listAuditCourseWare',
            getNextAuditNode: url + '/courseware/courseService/getNextAuditNode',
            auditCourseWare: url + '/courseware/courseService/auditCourseWare',
            updateCourseWare: url + '/courseware/courseService/updateCourseWare',
            listAuditLogByCourseWareCode: url + '/courseware/courseService/listAuditLogByCourseWareCode',
            sendAuditMsg: url + '/courseware/courseService/sendAuditMsg',
            deleteCourseWare: url + '/courseware/courseService/deleteCourseWare',
            listCourseWareByLessonId: url + '/courseware/courseService/listCourseWareByLessonId',
            addListPhoto: url + '/courseware/courseService/addListPhoto',
            listPhoto: url + '/courseware/courseService/listPhoto',

        },
        LessonService: {
            listLesson: url + '/lesson/LessonService/listLesson',
            listVerifyLesson: url + '/lesson/LessonService/listVerifyLesson',
            createLesson: url + '/lesson/LessonService/createLesson',
            deleteLesson: url + '/lesson/LessonService/deleteLesson',
            updateLesson: url + '/lesson/LessonService/updateLesson',
            getLesson: url + '/lesson/LessonService/getLesson',
            getLessonDetail: url + '/lesson/LessonService/getLessonDetail',
            verifyLesson: url + '/lesson/LessonService/verifyLesson',
            listLessonByType: url + '/lesson/LessonService/listLessonByType',
            listPublishLesson: url + '/lesson/LessonService/listPublishLesson',
            publishLesson: url + '/lesson/LessonService/publishLesson',
            listResourceByLessonId: url + '/lesson/LessonService/listResourceByLessonId',
            getCopyCourseWare: url + '/lesson/LessonService/getCopyCourseWare',
            copyLessonCourseWare: url + '/lesson/LessonService/copyLessonCourseWare',
            isNotCompleteCourseWare: url + '/lesson/LessonService/isNotCompleteCourseWare',
            addListTagTemplate:url + '/tagTemplate/TagTemplateService/addTagTemplate'
        },
        TagTemplateService: {
            createTagTemplate: url + '/tagTemplate/TagTemplateService/createTagTemplate',
            getTagTemplate: url + '/tagTemplate/TagTemplateService/getTagTemplate',
            listTag: url + '/tagTemplate/TagTemplateService/listTag',
            updateTagTemplate: url + '/tagTemplate/TagTemplateService/updateTagTemplate'
        },
        CurriculumService: {
            initConfigHbk: url + '/curriculum/CurriculumService/initConfigHbk'
        },
        CourseService: {
            findCourseInfo: url + '/course/CourseService/findCourseInfo',
            findClassName: url + '/course/CourseService/findClassName',
            updateCourseShiftAmount: url + '/course/CourseService/updateCourseShiftAmount',
            isAdmin: url + '/course/CourseService/isAdmin',
            isFinished: url + '/course/CourseService/isFinished',
            redirectSyncCourse: url + '/course/CourseService/redirectSyncCourse'
        },
        SyncCourseXgjService: {
            doSyncAllCourse: syncUrl + '/course/SyncCourseXgjService/doSyncAllCourse',
            initDep: syncUrl + '/course/SyncCourseXgjService/initDep'
        },
        ResourceService: {
            resourceSort: url + '/resource/resourceService/resourceSort',
        },
        OssService: {
            ossSignatrue: restUrl + '/oss/OssService/getOssSignature'
        },
        LoginService: {
            login: restUrl + '/login/loginService/login',
            loginByDingDing: restUrl + '/login/loginService/loginByDingDing'
        },

        /**
         * 知识点服务
         */
        KnowledgeService: {
            listKnowledge: url + '/knowledge/knowledgeService/listKnowledge',
            saveOrUpdateKnowledge: url + '/knowledge/knowledgeService/saveOrUpdateKnowledge',
            getKnowledge: url + '/knowledge/knowledgeService/getKnowledge',
            delete: url + '/knowledge/knowledgeService/delete',

        },
        DictService: {
            listDict: url + '/dict/DictService/listDict'
        },
        LessonMasterService: {
            listMaster: url + '/lesson/lessonMasterService/listMaster',
            createMaster: url + '/lesson/lessonMasterService/createMaster',
            getMaster: url + '/lesson/lessonMasterService/getMaster',
            lessonMasterRef: url + '/lesson/lessonMasterService/lessonMasterRef',
            updateMaster: url + '/lesson/lessonMasterService/updateMaster',
        },
        LessonPushService: {
            listPush: url + '/lesson/LessonPushService/listPush',
            createPush: url + '/lesson/LessonPushService/createPush',
            getPush: url + '/lesson/LessonPushService/getPush',
            updatePush: url + '/lesson/LessonPushService/updatePush',
            createLessonRefBatch: url + '/lesson/LessonPushService/createLessonRefBatch',
        }
        /**作品审核*/
        , WorksAuditService: {
            listReviewWorks: url + '/works/WorksAuditService/listReviewWorks',
            listFinalWorks: url + '/works/WorksAuditService/listFinalWorks',
            reviewAudit: url + '/works/WorksAuditService/reviewAudit',
            finalAudit: url + '/works/WorksAuditService/finalAudit',
            batchReviewAudit: url + '/works/WorksAuditService/batchReviewAudit',
            batchFinalAudit: url + '/works/WorksAuditService/batchFinalAudit'
        }
        /**设备管理*/
        , DeviceService: {
            listDevice: url + '/device/DeviceService/listDevice',
            removeDevice: url + '/device/DeviceService/removeDevice',
            createDevice: url + '/device/DeviceService/createDevice',
            updateDevice: url + '/device/DeviceService/updateDevice',
            getDevice: url + '/device/DeviceService/getDevice'
        }
        /**投诉建议管理*/
        , ComplaintService: {
            listComplaint: url + '/complaint/ComplaintService/listComplaint',
            removeComplaint: url + '/complaint/ComplaintService/removeComplaint',
            createComplaint: url + '/complaint/ComplaintService/createComplaint',
            updateComplaint: url + '/complaint/ComplaintService/updateComplaint',
            getComplaint: url + '/complaint/ComplaintService/getComplaint'
        }
        /**班级成员服务*/
        , StudentService: {
            listStudent: url + '/classinfo/StudentService/listStudent',
            saveGrading: url + '/classinfo/StudentService/saveGrading',
            saveContest: url + '/classinfo/StudentService/saveContest',
            getContestById: url + '/classinfo/StudentService/getContestById',
            getGradingById: url + '/classinfo/StudentService/getGradingById',
            listGrading: url + '/classinfo/StudentService/listGrading',
            listContest: url + '/classinfo/StudentService/listContest',
            removeGrading: url + '/classinfo/StudentService/removeGrading',
            removeContest: url + '/classinfo/StudentService/removeContest'
        }
        /**公用服务*/
        , CommonService: {
            getAllCampus: url + '/common/CommonService/getAllCampus',
            queryClasssByCampus: url + '/common/CommonService/queryClasssByCampus',
            getAllShift: url + '/common/CommonService/getAllShift',
            queryLesson: url + '/common/CommonService/queryLesson',
        }
        /**币服务*/
        , CoinService: {
            listCoin: url + '/coin/CoinService/listCoin',
            changeGift: url + '/coin/CoinService/changeGift',
            listCoinDetail: url + '/coin/CoinService/listCoinDetail'
        }
        /**小样审核*/
        , LessonAuditService: {
            listLesson: url + '/lesson/lessonAuditService/listLesson',
            batchReviewAudit: url + '/lesson/lessonAuditService/batchReviewAudit'

        },
        courseAuthority: {
            selName: url + '/course/courseAuthority/selName',
            listShift: url + '/course/courseAuthority/listShift',
            addCourseAuthority: url + '/course/courseAuthority/addCourseAuthority',
            aKeyCourseAuthority: url + '/course/courseAuthority/aKeyCourseAuthority',
        },
        WordToPdfService:{
            getPdfByCoursewareId: restUrl + '/wordToPdf/WordToPdfService/getPdfByCoursewareId',
            getBase64Preview: restUrl + '/wordToPdf/WordToPdfService/getBase64Preview',
            getPdfBase64ByWordBase64: restUrl + '/wordToPdf/WordToPdfService/getPdfBase64ByWordBase64',
        },

        /**分销管理 */
        retailService:{
            conditionalQuery: retailUrl + '/distribution/conditionalQuery',
            exportExcel: retailUrl + '/distribution/exportExcel',
        },

        /**抽奖管理 */
        drawService:{
            conditionalQuery: retailUrl + '/winningThePrize/conditionalQuery',
            addPrize: retailUrl + '/winningThePrizeRule/addList',
            findPrize: retailUrl + '/winningThePrizeRule/find',
            verifyQuery: retailUrl + '/couponWriteOff/conditionalQuery',
            verifyExcel: retailUrl + '/couponWriteOff/exportExcel',
            couponExcel: retailUrl + '/couponWriteOff/importExcel',
            queryCampusByMobile: retailUrl + '/winningThePrizeRule/numberDisplayCampus/mobile',
        },

        /**订单管理 */
        orderService:{
            refundQueryByCriteria: orderUrl + '/refund/queryByCriteria',
            refundExportExcel: orderUrl + '/refund/exportExcel',
            cashQueryByCriteria: orderUrl + '/order/cashVoucherList',
            cashExportExcel: orderUrl + '/order/exportExcel',
            editCashStatus: orderUrl + '/order/editCashVoucher',
            overQueryByCriteria: orderUrl + '/carryOver/queryByCriteria',
            overExportExcel: orderUrl +'/carryOver/exportExcel',
            classQueryByCriteria: orderUrl + '/orderDetail/queryOrderAndCourseByPage',
            refundAndOverQueryByPage: orderUrl + '/orderDetail/queryRefundAndOverByPage',
            queryOrderDesc: orderUrl + '/order/findOrderDesc',
            recodeQueryByPage: orderUrl + '/order/displayPaymentRecord',
        }

    })
});
