//변수
//프로그래밍에서의 변수는 수학에서의 본질적인 개념은 같지만 전혀 추상적이지 않고 정말 편리한 도구
//왜 쓰는지 설명하기 어려울만큼 우리한테 변수는 정말 중요한 문법
//한번 살펴봅시다.

//오른쪽에 있는 데이터를 왼쪽 'a'에 넣어라.
// '=' 는 대입연산자라고 한다.
//변수의 변은 변할 수 
//상수의 상은 항상 상(메모리 저장 위치)
//리터럴 변수에 넣는 변하지 않는 데이터(메모리 저장된 값)
//var키워드를 빼고 선언하면 scope범위로 봤을 때 전역변수로 저장된다.(함수안에 선언했더라도)
var a = 1;

console.log(a);

a = 2;

console.log(a);

//1 = 2;