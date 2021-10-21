import {User} from "../../../models/User";
import {Event} from "../../../models/Event";

export interface EventState {
    guests: User[];
    events: Event[]
}

export enum EventActionEnum {
    SET_GUESTS = 'SET_GUESTS',
    SET_EVENTS = 'SET_EVENTS'
}

export interface SetGuestsAction {
    type: EventActionEnum.SET_GUESTS
    payload: User[]
}

export interface SetEventsAction {
    type: EventActionEnum.SET_EVENTS
    payload: Event[]
}

export type EventAction = [
    SetEventsAction |
    SetGuestsAction
]