// จงเขียนโปรแกรมคำนวณค่าเรียนพิเศษของ ติวเตอร์คณิตศาสตร์ แห่งหนึ่ง โดย ติวเตอร์แห่งนี้
//  คิดค่าเรียนเป็นรายชั่วโมง ชั่วโมงละ 250 บาท จ่ายเป็นแบบครั้งต่อครั้ง 
//  ให้โปรแกรมมีการรับค่าจำนวนชั่งโมงที่สอนและจำนวนเงินที่จ่าย 
//  (มีข้อกำหนดว่า จำนวนเงินที่จ่ายที่กรอกนั้นมากกว่าหรือเท่ากับจำนวนที่จ่ายเสมอ) 
//  และเมื่อมีเงินทอนให้โปรแกรมแจ้งผู้ใช้ว่ามีเงินทอน รูปแบบการทำงานและแสดงผลตามตัวอย่างต่อไปนี้


// ตัวอย่างการทำงาน ครั้งที่ 1

// RUN : ทดสอบด้วยการป้อนจำนวนชั่วโมงที่เรียนเป็น 5 ชั่วโมง และ ชำระเงิน 1500 บาท

// Enter Hour : 5
// Total : 1250
// Pay : 1500
// Change : 250
// Has Changes


// ตัวอย่างการทำงาน ครั้งที่ 2

// RUN : ทดสอบด้วยการป้อนจำนวนชั่วโมงที่เรียนเป็น 1 ชั่วโมง และ ชำระเงิน 250 บาท

// Enter Hour : 1
// Total : 250
// Pay : 250
// Change : 0
// RUNFILE: node s.js

const prompt = require('prompt-sync')()
let hour = prompt("Enter Hour : ")

function tutor(total, change, money = 250) {
    for (i = 1; i < hour; i++) {
        money += 250
    }
    total = money
    console.log("Total : " + total);
    let pay = prompt("Pay : ")
    change = pay - total
    console.log("Change : " + change);
}
tutor()