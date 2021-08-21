import { Module } from "@nestjs/common";
import { GithubService } from "./github.service";

@Module({
  imports: [],
  controllers: [],
  providers: [GithubService],
})
export class GithubModule {}
