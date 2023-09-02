import React from "react"
import { NavLink, useParams } from "react-router-dom"

const AboutPage = () => {
    const { id } = useParams()
    console.log(id);
    return (
        <>
            <h1>ABOUT</h1>
            <div className="container-lg">
                <div className="card-groups">
                    <div className="card m-2" style={{ width: "30%", display: "inline-block" }}>
                        <div className="card-header">PRATIK</div>
                        <div className="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium voluptas necessitatibus saepe facere, minima quasi repudiandae
                            dolorum dignissimos asperiores quas eum, ratione, tempore molestias ab?
                        </div>
                        <div className="card-footer">
                            <NavLink to="/about/pratik" className="active">pratik</NavLink>
                        </div>
                    </div>

                    <div className="card m-2" style={{ width: "30%", display: "inline-block" }}>
                        <div className="card-header">bigyan</div>
                        <div className="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium voluptas necessitatibus saepe facere, minima quasi repudiandae
                            dolorum dignissimos asperiores quas eum, ratione, tempore molestias ab?
                        </div>
                        <div className="card-footer">
                            <NavLink to="/about/bigyan" className="active">bigyan</NavLink>
                        </div>
                    </div>
                    <div className="card m-2" style={{ width: "30%", display: "inline-block" }}>
                        <div className="card-header">SHOYUB</div>
                        <div className="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium voluptas necessitatibus saepe facere, minima quasi repudiandae
                            dolorum dignissimos asperiores quas eum, ratione, tempore molestias ab?
                        </div>
                        <div className="card-footer">
                            <NavLink to="/about/shoyub" className="active">shoyub</NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default AboutPage