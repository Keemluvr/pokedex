import "styled-components"
import { Theme } from "@/types"

declare module "styled-components" {
  // tslint:disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
