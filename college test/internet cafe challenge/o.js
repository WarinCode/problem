// ร้านอินเตอร์เน็ตคาเฟเร้านหนึ่งคิดค่าใช้บริการ 15 บาทต่อชั่วโมง ทางร้านต้องการดึงดูดลูกค้าที่ใช้อินเตอร์เน็ตหรือ
// เล่นเกมส์มาก จึงมีระบบสมาชิกร้านซูึ่งผู้สมัครสมาชิกจะเสียค่าสมาชิก 100 บาทต่อเดือนและจะได้ส่วนลด 10% จาก
// ค่าบริการ จงคำนวณค่าใช้จ่ายทั้งหมดต่อเดือนระหว่างผู้ใช้บริการ A และ B โดยที่ทั้ง A และ B ต่างก็ใช้บริการ 50ชั่วโมงต่อเดือนที่ร้านทั้งคู่ 
// โดยที่ A ไม่เป็นสมาชิก และ B เป็นสมาชิก (ค่าใช้จ่ายทั้งหมดของ B ต้องรวมค่าสมาชิกด้วย) และสรุปว่าใครเสียค่าใช้จ่ายมากกว่ากัน
// RUNFILE: node o.js

let membership = 100 % 10
let hour = 1
let charge_a = 15
let charge_b = 15

// a , b
var a = 50
var b = 50

while (hour < a && hour < b) {
    hour++
    charge_a += 15
    charge_b += 15
}
console.log(charge_a);
console.log(charge_b + membership);

// output1: 750
// output2: 750