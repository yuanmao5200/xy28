
export default  {
	user: {
		register: 'POST /users/register',
		login: 'POST /users/login',
		bindBank: 'POST /users/bindBank',
		getBankCards: 'GET /users/bankCards',
		getUserInfo: 'GET /users/getUserInfo',
		updateUserLogo: 'PUT /users/updateUserLogo',
		updateUserName: 'PUT /users/updateUserName',
	},
	withdraw: {
		queryWithdrawPwd: 'GET /withdraw/queryWithdrawPwd',
		setWithdrawPwd: 'PUT /withdraw/setWithdrawPwd',
		updateLoginPwd: 'PUT /users/updateLoginPwd',
		withdraw: 'POST /withdraw/withdraw',
		userWithDrawRecord: 'GET /withdraw/userWithDrawRecord',
	},
	gameRoles: {
		list: 'GET /gameRules/list',
		roomGameRule: 'GET /gameRules/roomGameRule',
	},
	bet: {
		records: 'GET /bet/records',
		roomBetRecords: 'GET /bet/roomBetRecords',
		cancelBet: 'PUT /bet/cancelBet',
		userRecords: 'PUT /bet/userRecords',
		integralChangeRecords: 'GET /users/integralChangeRecords',
		userBetRecords: 'GET /bet/userBetRecords',
		trend: 'GET /bet/trend',
	},
	recharge: {
		getCollectionAccounts: 'GET /recharge/getCollectionAccounts',
		doAlipayRecharge: 'POST /recharge/alipayRecharge',
		rechargeRecord: 'GET /recharge/rechargeRecord',
	},
	rooms: {
		getRooms: 'GET /system/rooms',
		getRoomInfo: 'GET /system/roomInfo',
		rollbackRules: 'GET /system/rollbackRules',
		specialGameRuleInfo: 'GET /gameRules/specialGameRuleInfo',
	},
	message: {
		systemList: 'GET /message/systemList',
		userMessages: 'GET /message/userMessages',
		detail: 'GET /message/detail'
	},
	rollback: {
		userRollbackRecords: 'GET /rollback/userRollbackRecords'
	},
	lottery: {
		records: 'GET /lottery/records'
	}
}