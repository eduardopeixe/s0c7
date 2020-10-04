import { NgModule } from '@angular/core'

import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'

@NgModule({
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule],
  exports: [MatButtonModule, MatFormFieldModule, MatInputModule],
})
export class MaterialModule {}
