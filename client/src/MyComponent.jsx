//자식 컴포넌트
const MyComponent = (props) => {
   //props : 속성을 부모 -> 자식 넘겨줌
   //비구조화 할당
   const {name, age} = props  //props.name, props.age

   return(
      <>
         <div>
            <h3>이름 : {name}<br></br>
               나이 : {age}
            </h3>
         </div>
      </>
   );
}

//component 사용 시, 외부에 내보내기 필요
export default MyComponent