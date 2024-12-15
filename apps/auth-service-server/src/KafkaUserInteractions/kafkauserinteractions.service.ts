import { Injectable } from "@nestjs/common";
import { UserAuthRequestDto } from "../kafkaInteractions/UserAuthRequestDto";

@Injectable()
export class KafkaUserInteractionsService {
  constructor() {}
  async PublishUserRequest(args: UserAuthRequestDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async SubscribeUserResponse(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
