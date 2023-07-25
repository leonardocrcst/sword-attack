import './bootstrap';
import '../css/app.css'
import * as React from 'react';
import Scaffold from "./components/Scaffold";
import {createRoot} from "react-dom/client";

const root = createRoot(document.getElementById('app'));
root.render(<Scaffold />);
