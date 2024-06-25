import { Injectable } from "@nestjs/common";
import { UserAuthRequestDto } from "../kafkaInteractions/UserAuthRequestDto";

@Injectable()
export class KafkaInteractionsService {
  constructor() {}
  async CreateAuthRequest(args: UserAuthRequestDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async PublishAuthRequest(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async SubscribeAuthResponse(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
