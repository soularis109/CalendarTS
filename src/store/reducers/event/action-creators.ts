import {EventActionEnum, SetEventsAction, SetGuestsAction} from "./types";
import {User} from "../../../models/User";
import {Event} from "../../../models/Event";
import {AppDispatch} from "../../index";
import axios from "axios";

export const EventActionCreators = {
    setGuests: (payload: User[]): SetGuestsAction =>({type: EventActionEnum.SET_GUESTS, payload}),
    setEvents: (payload: Event[]): SetEventsAction =>({type: EventActionEnum.SET_EVENTS, payload}),
    fetchGuest:  () => async (dispatch: AppDispatch ) => {
        try {
            const guests = await  axios.get<User[]>('./users.json')
        } catch (e) {
            console.log(e)
        }
    }
}