import React, {useState} from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";
import { useNavigate } from "react-router-dom";



function Write(){

    const navigate = useNavigate();


    let [inputValue1, setinputValue1] = useState("");
    let [inputValue2, setinputValue2] = useState("");

    const saveData = async () => {
        const db = getDatabase(app);
        const NovoDoc = push(ref(db, "Ong Amigos da Fauna/Usúarios"));
        set(NovoDoc, {
            NomeUsúario: inputValue1,
            Email: inputValue2
        }).then(() => {
            alert("Registros salvos com sucesso!")
        }).catch((error) => {
            alert("Erro: ", error.message);
        })

    }



    return(
        <div>

            <h1>INPUT DE DADOS</h1>

            <input type="text" value={inputValue1}
            onChange={(e) => setinputValue1(e.target.value)}
            />

            <input type="text" value={inputValue2}
            onChange={(e) => setinputValue2(e.target.value)}
            /> <br/>

            <button className="bttn2" onClick={saveData}>SALVAR REGISTROS</button>
            <br/>
            <br/>
            <br/>
            <button className="bttn1" onClick={() => navigate("/updateread")}>ATUALIZAÇÂO DE DADOS</button><br/>
            <button className="bttn1" onClick={() => navigate("/read")}>IR PARA REGISTROS</button>
        </div>
    )
}

export default Write

