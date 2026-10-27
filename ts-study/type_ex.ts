/*interface User{
    id: number,
    name: string,
    age?: number
}*/
// 유니언(Union) 타입 - 여러 타입 중 하나를 선택
type MemberRole = "user" | "admin"

// 객체 정의
type User = {
    id: number,
    name: string,  // 필수 속성
    age?: number   // 선택 속성
    role: MemberRole   // 필수
}

// 객체 생성(user1)
const user1: User = {id: 1, name: "우영우", role: "admin"}

// 객체 생성(user2)


// 출력
console.log(`회원1 - ID: ${user1.id}, 이름: ${user1.name}, 권한: ${user1.role}`);
