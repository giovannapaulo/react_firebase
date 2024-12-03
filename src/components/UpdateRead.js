import React, { useState } from "react";
import { getDatabase, ref, get, remove } from "firebase/database";
import app from "../firebaseConfig";
import { useNavigate } from "react-router-dom";


function UpdateRead(){

    const navigate = useNavigate();
   
    let [userArray, setuserArray] = useState([]);

    const fetchData = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "Ong Amigos da Fauna/Usúarios");
        const snapshot = await get(dbRef);
        if(snapshot.exists()){
            
            const myData = snapshot.val();
            const tempArray = Object.keys(myData).map( myFileId => {
                return{
                  ...myData[myFileId],
                  nomeid: myFileId
                }
            });

            setuserArray(tempArray);
        } else{
            alert("Error.");
        }
    }
    
    const deleteData = async (idParametro) => {
        const db = getDatabase(app);
        const dbRef = ref(db, "Ong Amigos da Fauna/Usúarios/"+idParametro);
        await remove(dbRef)
        window.location.reload();
    }


   
    return(
        <div>
            <h1>ATUALIZAR REGISTROS</h1>
            <button className="bttn2" onClick={fetchData}>MOSTRAR REGISTROS</button>
            <ul>
                {userArray.map((item, index) => (
                    <li key={index}>
                        {item.NomeUsúario}: {item.Email} : {item.nomeid}
                        <button className="bttn1" onClick={() => navigate(`/updatewrite/${item.nomeid}`)}>ATUALIZAR</button>
                        <button className="bttn1" onClick={() => deleteData(item.nomeid)}>DELETAR</button>
                    </li>

                ))
                }
            </ul>
            <button className="bttn1" onClick={() => navigate("/")}>RETORNAR AO INICIO</button>
            <button className="bttn1" onClick={() => navigate("/read")}>IR PARA REGISTROS</button>
        </div>
    )

}

export default UpdateRead;