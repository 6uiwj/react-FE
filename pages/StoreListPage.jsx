import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function StoreListPage() {

  const [stores, setStores] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
      const token = localStorage.getItem("accessToken");

      if(!token) {
        navigate("/login");
        return;

      }
     api.get("/v1/stores")
      .then(res => {
        console.log("API 응답:", res.data);
        setStores(res.data.data);
      })
      .catch(err => {
        console.error("에러:",err);
      });
  }, [navigate]);


  const handleStoreClick = (storeId) => {
    navigate(`/menus/${storeId}`);
  };



  

return (
  <div>
    <h1>가게 목록</h1>

    {stores.map(store => {

      console.log("store 객체:", store);

      return (
        <div
          key={store.storeId}
          onClick={() => handleStoreClick(store.storeId)}
          style={{
            cursor:"pointer",
            border:"1px solid gray",
            margin:"10px",
            padding:"10px"
          }}
        >
          <h3>{store.name}</h3>
          <p>{store.address}</p>
        </div>
      );

    })}

  </div>
);
}

export default StoreListPage;