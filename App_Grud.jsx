import React, { useState } from 'react'

export default function App_Grud() {
    const [id,setId]=useState()
    const [nom,setNom]=useState()
    const [prenom,setPrenom]=useState()
    const [age,setAge]=useState()
    const [sexe,setSexe]=useState()
    const [email,setEmail]=useState()
    const [is,setIs]=useState(0)
    const [filter,setFilter]=useState([])
    const [data,setData]=useState([


        {
            id:1,
            nom:"achraf",
            prenom:"abdeslami",
            age:20,
            sexe:"homme",
            email:"achraf@gmail.com"
        },
        {
            id:2,
            nom:"adnane",
            prenom:"elmir",
            age:21,
            sexe:"homme",
            email:"adnane@gmail.com"
        }
        ,
        {
            id:3,
            nom:"asia",
            prenom:"sounani",
            age:19,
            sexe:"femme",
            email:"asia@gmail.com"
        }
        ,
        {
            id:4,
            nom:"kaoutar",
            prenom:"18",
            age:19,
            sexe:"femme",
            email:"kaoutar@gmail.com"
        }
    ])
    const dataNeutre=filter.length >=1 ? filter : data

    const handleSubmit=(e)=>{
        e.preventDefault()
        setData((prev)=>{
            return [...prev,{
                id:id,
                nom:nom,
                prenom:prenom,
                age:age,
                sexe:sexe,
                email:email
            }]
        })
        setId('')
        setAge('')
        setEmail('')
        setNom('')
        setSexe('')
        setPrenom('')
        
    }
    const handleFilter=()=>{
       const filter=data.filter((u)=>u.sexe ==sexe)
       setFilter(filter)

    }
    const hanldeUpdate=(id)=>{
        setIs(1)
        const update=data.find((u)=>u.id==id)
        setId(update.id)
        setAge(update.age)
        setEmail(update.email)
        setNom(update.nom)
        setSexe(update.sexe)
        setPrenom(update.prenom)
    }
const handleModifier=(e)=>{
    e.preventDefault()
    setData((prev)=>{
            return [...prev.map((item)=>{
            if (parseInt(item.id)==parseInt(id) ){
            return {...item,id:id,
                nom:nom,
                prenom:prenom,
                age:age,
                sexe:sexe,
                email:email}}
                return item
        
            })
    ]
    })
      setId('')
        setAge('')
        setEmail('')
        setNom('')
        setSexe('')
        setPrenom('')
    setIs(0)

}
const handleDelete=(id)=>{
    setData((prev)=>{
        return [...prev.filter((u)=>parseInt(u.id) !== parseInt(id))]
    })

}
  return (
    
    <div>
        <div style={{
            backgroundColor:'aqua'
        }}>
            <select name="" onChange={(e)=>{setSexe(e.target.value)}}>
                <option > chose Sexe</option>
                <option value="homme">homme</option>
                <option value="femme">femme</option>
            </select>
            <button onClick={handleFilter}>Filter</button>

        </div>
        <form action="">
            <label >
                ID

                <input type="text" name="" id="" value={id} onChange={(e)=>setId(e.target.value)} />
            </label><br /><br />
            <label >
                NOM

                <input type="text" name="" id="" value={nom}  onChange={(e)=>setNom(e.target.value)} />
            </label><br /><br />
            <label >
                Prenom

                <input type="text" name="" id="" value={prenom}  onChange={(e)=>setPrenom(e.target.value)} />
            </label><br /><br />
            <label >
                Age

                <input type="text" name="" id="" value={age}  onChange={(e)=>setAge(e.target.value)} />
            </label><br /><br />
            <label >
                Sexe

                <input type="text" name="" id="" value={sexe}  onChange={(e)=>setSexe(e.target.value)} />
            </label><br /><br />
            <label >
                email

                <input type="text" name="" id="" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </label><br /><br />
            {
                is ?
                <input type="submit" value="Modifier" onClick={handleModifier}/>:
                <input type="submit" value="Ajouter" onClick={handleSubmit}/>
            }
        </form>
        <table>
            <tr>
                <td>ID</td>
                <td>NOM</td>
                <td>PRENOM</td>
                <td>AGE</td>
                <td>SEXE</td>
                <td>EMAIL</td>
                <td>
                    Action
                </td>
            </tr>
            {
                dataNeutre.map((valeur,index)=>{
                    return <tr key={index}>
                        <td> {valeur.id} </td>
                        <td> {valeur.nom} </td>
                        <td> {valeur.prenom} </td>
                        <td> {valeur.age} </td>
                        <td> {valeur.sexe} </td>
                        <td> {valeur.email} </td>
                        <td>
                            <button onClick={()=>hanldeUpdate(valeur.id)} >Modifier</button>
                            <button  onClick={()=>handleDelete(valeur.id)}>Supprimer</button>
                        </td>

                        
                    </tr>
                })
            }
            
        </table>


    </div>
  )
}
