import React from 'react'
import { Link } from 'react-router-dom'
import './LoginSignup.css'

export default function LoginSignup() {
    return (
        <main className="main">
            <div className="container">
                <section className="wrapper">
                    <div className="heading">
                        <h1 className="text text-large">Sign In</h1>
                        <p className="text text-normal">
                            Already have an account?{" "}
                            <span>
                                <Link to="/login" className="text text-links">
                                    Sign in
                                </Link>
                            </span>
                        </p>
                    </div>
                    <form name="signin" className="form">
                        <div className="input-control">
                            <label htmlFor="name" className="input-label" hidden="true">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="input-field"
                                placeholder="Name"
                            />
                        </div>
                        <div className="input-control">
                            <label htmlFor="email" className="input-label" hidden="true">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="input-field"
                                placeholder="Email Address"
                            />
                        </div>
                        <div className="input-control">
                            <label htmlFor="password" className="input-label" hidden="true">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="input-field"
                                placeholder="Password"
                            />
                        </div>
                        <div className="input-control">
                            <label htmlFor="cpassword" className="input-label" hidden="true">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="cpassword"
                                id="cpassword"
                                className="input-field"
                                placeholder="Confirm Password"
                            />
                        </div>
                        <div className="input-control-signBtn">
                            <input
                                type="submit"
                                name="submit"
                                className="input-submit"
                                defaultValue="Sign In"
                                disabled=""
                            />
                        </div>
                    </form>
                </section>
            </div>
        </main>
    )
}
