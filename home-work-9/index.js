// единая точка входа, подключаем (импортируем) View, Model, Controller
import { View } from "./View.js"
import { Model } from "./Model.js"
import { Controller } from "./Controller.js";


const controller = new Controller(View, Model); // Controller связывает View и Model