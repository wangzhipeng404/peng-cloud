
export function uuid (len = 32) {
	const s = [];
	// 随机的id值从以下字符串中产生
	const uuidData = "0123456789abcdefghijklmnopqrstuvwxyz";
	const uuidDataLength = uuidData.length;
	//此处循环了36次，可以修改循环次数，循环次数决定生成id长度	
	for (let i = 0; i < len; i++) {
		// 从uuidData中随机截取一个字符
		s[i] = uuidData.substr(Math.floor(Math.random() * uuidDataLength), 1)
	}
	//下方为自定义格式操作，可忽略
	// s[14] = "4"; 
	// s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
	// s[8] = s[13] = s[18] = s[23] = "-";
	var uuid = s.join('')
	return uuid
}