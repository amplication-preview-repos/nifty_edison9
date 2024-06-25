import { Injectable } from "@nestjs/common";
import { UserAuthRequestDto } from "../kafkaInteractions/UserAuthRequestDto";

@Injectable()
export class KafkaPermissionInteractionsService {
  constructor() {}
  async PublishPermissionRequest(args: UserAuthRequestDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async SubscribePermissionResponse(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
