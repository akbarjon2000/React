import React, { Component } from 'react'
import student from "./studentData"
import "./table.css"


export const Lesson = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Email</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Akbarjon</td>
                        <td>Metandong</td>
                        <td>01091519002</td>
                        <td>abdulkhamidovakbarjon@gmail.com</td>
                    </tr>
                </tbody >
            </table>
        </div>
    )
}


