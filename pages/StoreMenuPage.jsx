import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

function StoreMenuPage(){

  const { storeId } = useParams();
  const [menus, setMenus] = useState([]);
  const [openMenuId, setOpenMenuId] = useState(null);


  useEffect(() => {

    console.log("storeId:", storeId);

    if (!storeId) return;

    api.get("/v1/menus", {
        params: {storeId: storeId},
    })
      .then(res => {
        console.log("메뉴 응답:",res.data);
        setMenus(res.data);
      })
      .catch(err => {
        console.error(err);
      });

  }, [storeId]);

const handleMenuClick = (menuId) => {
  if (openMenuId === menuId) {
    setOpenMenuId(null); // 다시 누르면 닫기
  } else {
    setOpenMenuId(menuId); // 다른 메뉴 열기
  }
};

  return (
    <div>

      <h1>메뉴 목록</h1>

      {menus.map(menu => (
        <div key={menu.id} 
        style={{border:"1px solid gray", 
                margin: "10px", 
                padding:"10px",
                borderRadius:"5px"
        }}>
          
        <div
        onClick={() => handleMenuClick(menu.id)}
        style={{cursor:"pointer"}}
        >

            <h3>
              {menu.name}
              {" "}
              {openMenuId === menu.id ? "▼" : "▶"}
            </h3>

            <p>{menu.description}</p>
            <p>{menu.price}원</p>
        </div>

        {/* 옵션 영역 */}
          {openMenuId === menu.id && (
            <div style={{ marginLeft: "20px", marginTop: "10px" }}>

              {menu.options.length === 0 && (
                <p>옵션 없음</p>
              )}

              {menu.options.map(option => (
                <div key={option.id} style={{ marginBottom: "10px" }}>

                  <h4>{option.optionName}</h4>

                  {option.optionValues.map(value => (
                    <div
                      key={value.id}
                      style={{
                        paddingLeft: "10px",
                        marginBottom: "5px"
                      }}
                    >
                      {value.value}
                      {" "}
                      (+{value.addPrice}원)
                      {" "}
                      - {value.description}
                    </div>
                  ))}

                </div>
              ))}

            </div>
          )}

        </div>
      ))}

    </div>
  );
}

export default StoreMenuPage;