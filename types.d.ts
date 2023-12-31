/**
 * 性别
 */
export enum Sex {
  male = "男",
  female = "女",
  other = "其他",
}

/**
 * 权限
 */
export enum Permission {
  admin = 0,
  common = 1,
}

/**
 * 职位
 */
export enum Post {
  secretary = "书记",
  secondarySecretary = "副书记",
  publicity = "宣传委员",
  organizer = "组织委员",
  discipliner = "纪检委员",
}

/**
 * 党小组
 */
export enum Group {
  one = "一小组",
  two = "二小组",
  three = "三小组",
}

/**
 * 政治面貌
 */
export enum Role {
  masses = "群众", // 群众
  leagueMember = "共青团员", // 共青团员
  activist = "入党积极分子", // 入党积极分子
  reservePartyMember = "预备党员", // 预备党员
  fullPartyMember = "正式党员", // 正式党员
}

/**
 * 在校状态
 */
export enum SchoolStatus {
  graduation = "毕业", // 毕业
  reading = "在读", // 在读
  rollOut = "转出", // 转出
}

/**
 * Unix时间戳
 *
 * @Unit `ms`
 */
export declare type TimeStamp = number

/**
 * 谈话人信息
 */
export declare type Interlocutor = {
  username: string
  name: string
  time: TimeStamp
  /**
   * 谈话记录电子版链接
   */
  record?: string
}

/**
 * 培养联系人信息
 */
export declare type Cultivator = {
  username: string
  name: string
  start: TimeStamp
  end?: TimeStamp
}

/**
 * 用户信息
 */
export declare interface UserInfo {
  /**
   * 学号
   *
   * @Origin https://ct8hv7vfy1.feishu.cn/base/AlbRbDCbFawVLCsJaoScsus2nsg?table=tblyKTUwLcbltOYx&view=vewCYKnZ4q
   */
  username: string
  /**
   * 姓名
   *
   * @Origin https://ct8hv7vfy1.feishu.cn/base/AlbRbDCbFawVLCsJaoScsus2nsg?table=tblyKTUwLcbltOYx&view=vewCYKnZ4q
   */
  name?: string
  /**
   * 身份证号
   *
   * @Origin https://ct8hv7vfy1.feishu.cn/base/AlbRbDCbFawVLCsJaoScsus2nsg?table=tblyKTUwLcbltOYx&view=vewCYKnZ4q
   */
  id?: string
  /**
   * 生日
   *
   * @Origin https://ct8hv7vfy1.feishu.cn/base/AlbRbDCbFawVLCsJaoScsus2nsg?table=tblyKTUwLcbltOYx&view=vewCYKnZ4q
   */
  birthday?: TimeStamp
  /**
   * 党小组
   *
   * @Origin https://ct8hv7vfy1.feishu.cn/base/AlbRbDCbFawVLCsJaoScsus2nsg?table=tblyKTUwLcbltOYx&view=vewCYKnZ4q
   */
  group?: Group
  /**
   * 性别
   *
   * @Origin https://ct8hv7vfy1.feishu.cn/base/AlbRbDCbFawVLCsJaoScsus2nsg?table=tblyKTUwLcbltOYx&view=vewCYKnZ4q
   */
  sex?: Sex
  /**
   * 政治面貌
   *
   * @Origin https://ct8hv7vfy1.feishu.cn/base/AlbRbDCbFawVLCsJaoScsus2nsg?table=tblyKTUwLcbltOYx&view=vewCYKnZ4q
   */
  role?: Role
  /**
   * 年级
   *
   * @Origin https://ct8hv7vfy1.feishu.cn/base/AlbRbDCbFawVLCsJaoScsus2nsg?table=tblyKTUwLcbltOYx&view=vewCYKnZ4q
   */
  grade?: string
  /**
   * 民族
   *
   * @Origin https://ct8hv7vfy1.feishu.cn/base/AlbRbDCbFawVLCsJaoScsus2nsg?table=tblyKTUwLcbltOYx&view=vewCYKnZ4q
   */
  ethnic?: string
  /**
   * 申请入党时间
   *
   * @Origin https://ct8hv7vfy1.feishu.cn/base/AlbRbDCbFawVLCsJaoScsus2nsg?table=tblyKTUwLcbltOYx&view=vewCYKnZ4q
   */
  applicationTime?: TimeStamp
  /**
   * “两基”测试成绩
   *
   * @Origin https://ct8hv7vfy1.feishu.cn/base/AlbRbDCbFawVLCsJaoScsus2nsg?table=tblyKTUwLcbltOYx&view=vewCYKnZ4q
   */
  testScore?: number
  /**
   * 联系电话
   *
   * @Origin https://ct8hv7vfy1.feishu.cn/base/AlbRbDCbFawVLCsJaoScsus2nsg?table=tblyKTUwLcbltOYx&view=vewCYKnZ4q
   */
  phone?: string
  /**
   * 在校状态
   *
   * @Origin https://ct8hv7vfy1.feishu.cn/base/AlbRbDCbFawVLCsJaoScsus2nsg?table=tblyKTUwLcbltOYx&view=vewCYKnZ4q
   */
  schoolStatus?: SchoolStatus

  /**
   *谈话人信息
   *
   * @Origin https://ct8hv7vfy1.feishu.cn/base/AlbRbDCbFawVLCsJaoScsus2nsg?table=tblwC0HEwqHDsvTU&view=vewBdn16dk
   */
  interlocutor?: Interlocutor //

  /**
   * 培养联系人信息
   *
   * @Origin https://ct8hv7vfy1.feishu.cn/base/AlbRbDCbFawVLCsJaoScsus2nsg?table=tblcwuWcwkBvcZwT&view=vewBdn16dk
   */
  cultivators?: Cultivator[]

  /**
   * 《党的基本知识》结业证书时间
   *
   * @Origin https://ct8hv7vfy1.feishu.cn/base/AlbRbDCbFawVLCsJaoScsus2nsg?table=tblaRgfIpPUKaUen&view=vewBdn16dk
   */
  basicKnowledgeCertificate?: TimeStamp

  /**
   *《党的建设理论》结业证书时间
   *
   * @Origin https://ct8hv7vfy1.feishu.cn/base/AlbRbDCbFawVLCsJaoScsus2nsg?table=tbl9jf5wfrYTxSaq&view=vewBdn16dk
   */
  theoryOfPartyBuildingCertificate?: TimeStamp

  /**
   * 权限
   */
  permissions?: Permission[]
}

/**
 * 用户鉴权信息
 *
 * @Origin https://ct8hv7vfy1.feishu.cn/base/AlbRbDCbFawVLCsJaoScsus2nsg?table=tblsho0FlOfPn08q&view=vewv5om6Vu
 */
export declare type UserAuth = {
  username: string
  password: string
  permission?: Permission[]
}

/**
 * 用户登录JWT令牌
 *
 * @Origin https://ct8hv7vfy1.feishu.cn/base/AlbRbDCbFawVLCsJaoScsus2nsg?table=tblsho0FlOfPn08q&view=vewv5om6Vu
 */
export declare type Token = string

/**
 * 服务端返回处理结果状态
 */
export enum StatusCode {
  success = 0,
  failure = 1,
  error = 2,
}

/**
 * 用户Session
 */
export declare interface UserSession {
  username: string
  group: Group
  permission: Permission[]
  name: string
  recordId: string
}

/**
 * 服务端API响应体
 */
export declare interface Response<ResponseData> {
  code: StatusCode
  data: ResponseData
  message?: string
}

export declare type LoginResponseData = {
  token: string
}

export declare type FieldsResponseData = {
  name?: string
  type?: FieldType
  property?: any
  description?: {
    disable_sync?: boolean
    text?: string
  }
}[]

export declare type LoginResponse = Response<LoginResponseData>

// export declare type FieldsResponse = Response<>

export enum OptionsAllowedTable {
  BASE_ETHNIC_TABLE = "BASE_ETHNIC_TABLE",
}

export declare interface OptionsQuery {
  table: OptionsAllowedTable
  field: string
}

export enum FieldType {
  Text = 1,
  Number = 2,
  SingleSelect = 3,
  MultiSelect = 4,
  DateTime = 5,
  CheckBox = 7,
  Member = 11,
  Phone = 13,
  Url = 15,
  Attachment = 17,
  Link = 18,
  Formula = 20,
  MultiLink = 21,
  Location = 22,
  Group = 23,
  CreateDate = 1001,
  ModifiedTime = 1002,
  Creator = 1003,
  Modifier = 1004,
  AutoNumber = 1005,
}
