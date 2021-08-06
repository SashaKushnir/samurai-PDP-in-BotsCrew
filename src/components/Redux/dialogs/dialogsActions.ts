export const SEND_MESSAGE = 'SEND_MESSAGE'

export const dialogsActions = {
    sendingM: (message: string) => ({type: SEND_MESSAGE, message}) as const
}