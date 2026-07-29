export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status?: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
  override toString() {
    return `${this.name} (${this.status ?? "network"}): ${this.message}`;
  }
}
