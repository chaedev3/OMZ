package com.ssafy.omz.entity;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Bgm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long bgmId;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mini_room_id")
    private MiniRoom miniRoom;

    @Column(length = 100)
    private String title;

    @Column(length = 30)
    private String singer;
}
