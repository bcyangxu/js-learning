/**
 * 数组合并了相同类型的对象，而元组合并了不同类型的对象
 */
let yangxu:[string,number] = ['yangxu',22];

let bob:[string,number];
bob = ['test',11];
bob[0] = 'Bob';
bob[1] = 12;

// 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型
bob.push('male');
// bob.push(true);  // 报错