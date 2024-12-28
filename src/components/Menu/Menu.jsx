

const Menu = () => {
  const arrayMenu = [
    "Trang chủ",
    "Sản phẩm",
    "Tin tức",
    "Giới thiệu",
    "Liên hệ",
  ];

  console.log(arrayMenu);

  return (
    <>
        {/* Nếu dùng dấu ngoặc nhọn thì phải đi cới return */}
        <ul>
            {arrayMenu.map((item, index) => {
              return  <li key={index}>{item}</li>
            })}
        </ul>
        
        {/* Nếu không dùng dấu ngoặc nhọn thì không cần return */}
        <ul>
          {arrayMenu.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

    </>
  )
};

export default Menu;
//map() trong ReactJS duyệt qua từng phần tử của mảng và trả về một mảng mới với các phần tử đã qua xử lý.
//forEach thì nó sẽ không trả về gì cả, nó chỉ duyệt qua từng phần tử của mảng và thực hiện hành động nào đó mà bạn muốn.
// key trong ReactJs là một thuộc tính bắc buộc phải có khi bạn render một mãng dữ liệu
// Key giúp bạn xác định xem phần tử nào thay đổi, thêm mới, hay xóa đi.