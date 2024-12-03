import React, { useState } from "react";
import { getDatabase, ref, get } from "firebase/database";
import app from "../firebaseConfig";
import { useNavigate } from "react-router-dom";


function Read(){
   
    const navigate = useNavigate();


    let [userArray, setuserArray] = useState([]);

    const fetchData = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "Ong Amigos da Fauna/Usúarios");
        const snapshot = await get(dbRef);
        if(snapshot.exists()){
            setuserArray(Object.values(snapshot.val()));
        } else{
            alert("Error.");
        }
    }
   
   
    return(
        <div>

            <h1>LEITURA DE REGISTROS</h1>

            <button className="bttn2" onClick={fetchData}>MOSTRAR REGISTROS</button>
            <ul>
                {userArray.map((item, index) => (
                    <li key={index}>
                        {item.NomeUsúario}: {item.Email}
                    </li>

                ))
                }
            </ul>
            <button className="bttn1" onClick={() => navigate("/updateread")}>ATUALIZAÇÂO DE DADOS</button><br/>
            <button className="bttn1" onClick={() => navigate("/")}>RETORNAR AO INPUT</button>
        </div>
    )

}

export default Read;