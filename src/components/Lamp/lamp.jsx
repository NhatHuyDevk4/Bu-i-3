import { useState } from "react";


const lamp = () => {

    // let status = false;

    const handleClick = () => {
        // status = !status;
        // console.log(status); 
        // console.log nó chỉ tồn tại được trong hàm này thôi
        setStatus(!status);
    }

    // console.log(status);
    const[status, setStatus] = useState(false);

    console.log(status);

  return (
    <>
      <button onClick={handleClick}>{status ? "Tắt đi" : "Bật lên"}</button>

      <div>{status ? "Đèn đang bật" : "Đèn đang tắt"}</div>
    </>
  );
};

export default lamp;

//useState: là một hàm giúp chúng ta tạo ra một biến state và một hàm để thay đổi giá trị của biến state đó.
//onClick: là một sự kiện xảy ra khi người dùng click vào một phần tử