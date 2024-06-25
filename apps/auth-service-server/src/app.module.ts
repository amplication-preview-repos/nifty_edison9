import { Module } from "@nestjs/common";
import { RoleModule } from "./role/role.module";
import { PermissionModule } from "./permission/permission.module";
import { UserModule } from "./user/user.module";
import { KafkaAuthInteractionsModule } from "./KafkaAuthInteractions/kafkaauthinteractions.module";
import { KafkaInteractionsModule } from "./KafkaInteractions/kafkainteractions.module";
import { KafkaPermissionInteractionsModule } from "./KafkaPermissionInteractions/kafkapermissioninteractions.module";
import { KafkaRoleInteractionsModule } from "./KafkaRoleInteractions/kafkaroleinteractions.module";
import { KafkaUserInteractionsModule } from "./KafkaUserInteractions/kafkauserinteractions.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./kafka/kafka.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    KafkaModule,
    RoleModule,
    PermissionModule,
    UserModule,
    KafkaAuthInteractionsModule,
    KafkaInteractionsModule,
    KafkaPermissionInteractionsModule,
    KafkaRoleInteractionsModule,
    KafkaUserInteractionsModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
