import { country } from "../data/country";
// import "./Country.css";
import "./Country.scss";

const Country = () => {
  console.log(country);

  // có tư duy validate dữ liệu trước khi render

  return (
    <div >
      <ul className="country">
        {(country || []).map((item) => (
          <li key={item.id} className="country__item">
            <span className="country__text">{item.name}</span>
            <ul className="country__sub">
              {(item.city || []).map((city) => (
                <li key={city.id} className="country__sub-item" >{city.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Country;
// Đk hàng 13 có nghĩa là nếu mà null thì không thể map được 
// vì vậy ta thêm [] đê kiểm tra nếu null thì sẽ trả về mảng rỗng