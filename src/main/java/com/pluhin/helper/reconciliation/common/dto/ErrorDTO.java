package com.pluhin.helper.reconciliation.common.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ErrorDTO {

  private int code;
  private String message;
}