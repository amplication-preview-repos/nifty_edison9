import { Injectable } from "@nestjs/common";
import { UserAuthRequestDto } from "../kafkaInteractions/UserAuthRequestDto";

@Injectable()
export class KafkaRoleInteractionsService {
  constructor() {}
  async PublishRoleRequest(args: UserAuthRequestDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async SubscribeRoleResponse(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
