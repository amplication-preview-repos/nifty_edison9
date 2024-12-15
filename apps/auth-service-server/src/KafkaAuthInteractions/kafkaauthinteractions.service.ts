import { Injectable } from "@nestjs/common";
import { UserAuthRequestDto } from "../kafkaInteractions/UserAuthRequestDto";

@Injectable()
export class KafkaAuthInteractionsService {
  constructor() {}
  async PublishAuthRequest(args: UserAuthRequestDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async SubscribeAuthResponse(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
