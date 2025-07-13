export interface ApiResponse {
  success: boolean;
  message: string;
  data: {
    response: string;
    timestamp: string;
  };
}