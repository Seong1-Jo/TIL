// Object.freeze() 동결된 객체는 프로퍼티 값 변경 불가능(凍結したオブジェクトは変更不可能)

const freezeObj = {
  plus: 1,
  plusSeond: {
    plusSon: 3
  }
}
freezeObj.plus = 2; 
console.log(freezeObj.plus); // plus: 2 
console.log(freezeObj.plusSeond.plusSon); //plusSon: 3

Object.freeze(freezeObj); //凍結

freezeObj.plus = 3; 
console.log(freezeObj.plus); //  plus: 2 

//but 얕은 동결에서는 객체를 변경 가능(浅い凍結は変更可能)

freezeObj.plusSeond.plusSon = 4;
console.log(freezeObj.plusSeond.plusSon); //plusSon: 4
