import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  private uploadForm: FormGroup;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder) {
    this.uploadForm = this.fb.group({
      document: null
    });
  }

  ngOnInit() {
  }

  fileChangeEvent(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files;
      this.uploadForm.get('document').setValue(file);
    }
  }

  onUpload() {
    const form = new FormData();
    form.append('document', this.uploadForm.get('document').value);
    Swal(
      'Success!',
      'Document Uploaded Successfully',
      'success'
    );
  }

}
