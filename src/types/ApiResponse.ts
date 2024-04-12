export interface ApiResponse{
    success:boolean ;
    message: string;
    isAccepttingMessages?: boolean;
    messages?: Array<string>;
}