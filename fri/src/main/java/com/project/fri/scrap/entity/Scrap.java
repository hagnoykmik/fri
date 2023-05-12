package com.project.fri.scrap.entity;


import com.project.fri.board.entity.Board;
import com.project.fri.user.entity.User;
import com.project.fri.util.BaseEntity;
import com.project.fri.util.BaseTimeEntity;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Table(name="scrap")
public class Scrap extends BaseTimeEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name="scrap_id")
  private Long id;
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user_id")
  @NotNull
  private User user;
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "board_id")
  @NotNull
  private Board board;

  private boolean isDelete;
  @Embedded
  @NotNull
  private BaseEntity baseEntity;
}
