(function($) {
    "use strict";

    // Preloader
    function handlePreloader() {
        if($('.preloader').length){
            $('body').addClass('page-loaded');
            $('.preloader').delay(1000).fadeOut(300);
        }
    }

    // Header Style
    function headerStyle() {
        if($('.main-header').length){
            var scrollY = $(window).scrollTop();
            var header = $('.main-header');

            if (scrollY <= 400) {
                header.removeClass('header-fixed').addClass('header-absolute');
            } else {
                header.addClass('header-fixed').removeClass('header-absolute');
            }
        }
    }

    $(window).on('scroll', headerStyle);
    headerStyle();

    // Mobile Menu
    if($('.mobile-menu').length){
        var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
        $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

        $('.mobile-nav-toggler').on('click', function() {
            $('body').addClass('mobile-menu-visible');
        });

        $('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on('click', function() {
            $('body').removeClass('mobile-menu-visible');
        });
    }

    // Back to Top
    $(window).on('scroll', function() {
        var scrollPos = $(window).scrollTop();
        if (scrollPos > 300) {
            $('#backToTop').addClass('show');
        } else {
            $('#backToTop').removeClass('show');
        }
    });

    $('#backToTop').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    $(window).on('load', function() {
        handlePreloader();
    });

})(window.jQuery);

// ==================== DIVISION SLIDER ====================
const divisions = [
    {
        name: "Steering Committee",
        desc: "Pengarah dan pengawas organisasi",
        img: "assets/img/divisi/steering.png",
        count: 6,
        about: {
            title: "Ketua Himpunan",
            description: "Steering Committee merupakan badan pengarah tertinggi dalam HIMTIKA yang bertanggung jawab dalam menetapkan arah kebijakan strategis organisasi. SC bertugas mengawasi jalannya program kerja seluruh divisi dan memastikan setiap keputusan besar organisasi selaras dengan visi dan misi HIMTIKA.",
            bgIcon: "assets/img/icon/icon_sc.png",
            departments: [
                {
                    name: "Pengawasan Kebijakan",
                    desc: "Mengawasi pelaksanaan kebijakan strategis serta memastikan setiap program kerja divisi berjalan sesuai arah dan tujuan organisasi.",
                    members: [
                        { photo: "assets/img/anggota/sc/1.png", firstName: "Nama", lastName: "Ketua Dept", role: "Ketua Dept Pengawasan", highlight: "Nama" },
                        { photo: "assets/img/anggota/sc/2.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Pengawasan", highlight: "Nama" }
                    ],
                    proker: [
                        {
                            title: "Monitoring Kinerja Divisi",
                            pic: "Nama Penanggung Jawab",
                            desc: "Program kerja yang berfokus pada pemantauan rutin terhadap progres dan kinerja setiap divisi, memastikan seluruh program berjalan sesuai timeline dan target yang telah ditetapkan.",
                            mainImg: "assets/img/proker/sc/monitoring_main.png",
                            thumbs: ["assets/img/proker/sc/monitoring_1.png", "assets/img/proker/sc/monitoring_2.png", "assets/img/proker/sc/monitoring_3.png"]
                        },
                        {
                            title: "Audit Kebijakan Organisasi",
                            pic: "Nama Penanggung Jawab",
                            desc: "Melakukan audit berkala terhadap kebijakan yang berlaku di HIMTIKA untuk memastikan relevansi dan efektivitasnya terhadap kebutuhan organisasi saat ini.",
                            mainImg: "assets/img/proker/sc/audit_main.png",
                            thumbs: ["assets/img/proker/sc/audit_1.png", "assets/img/proker/sc/audit_2.png"]
                        }
                    ]
                },
                {
                    name: "Evaluasi Strategis",
                    desc: "Melakukan evaluasi berkala terhadap kinerja organisasi serta merumuskan rekomendasi perbaikan untuk pengembangan HIMTIKA kedepannya.",
                    members: [
                        { photo: "assets/img/anggota/sc/3.png", firstName: "Nama", lastName: "Ketua Dept", role: "Ketua Dept Evaluasi", highlight: "Nama" },
                        { photo: "assets/img/anggota/sc/4.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Evaluasi", highlight: "Nama" }
                    ],
                    proker: [
                        {
                            title: "Evaluasi Akhir Kepengurusan",
                            pic: "Nama Penanggung Jawab",
                            desc: "Menyusun laporan evaluasi menyeluruh terhadap capaian seluruh divisi di akhir periode kepengurusan sebagai dasar perbaikan periode berikutnya.",
                            mainImg: "assets/img/proker/sc/evaluasi_main.png",
                            thumbs: ["assets/img/proker/sc/evaluasi_1.png", "assets/img/proker/sc/evaluasi_2.png"]
                        }
                    ]
                }
            ],
            kadiv: {
                photo: "assets/img/divisi/kahim.png",
                firstName: "Nama",
                lastName: "Ketua SC",
                role: "Ketua Steering Committee",
                scale: 0.999,
                posY: "5%"
            },
            wakil: {
                title: "Wakil Ketua",
                description: "Merupakan penanggung jawab koordinator bidang. Bidang data dan pustaka, ketatausahaan dan penerangan serta hubungan organisasi dengan pihak eksternal organisasi.",
                peranLabel: "Peran Wakil Ketua Himpunan yaitu:",
                peran: [
                    { highlight: "Mendampingi", text: "Kahim" },
                    { highlight: "Menggantikan", text: "ketua" },
                    { highlight: "Mengkoordinasi", text: "bidang" },
                    { highlight: "Mengawasi", text: "program" }
                ],
                photo: "assets/img/divisi/wakil_ketua.png",
                firstName: "Indyra",
                lastName: "Putri Pratama",
                role: "Wakil Ketua Himpunan",
                scale: 1.15,
                posY: "5%"
            },
            sekretaris: {
                label: "Administrasi",
                title: "Sekretaris",
                description: "Merupakan penanggung jawab dan koordinator di bidang administrasi HIMTIKA.",
                peranLabel: "Peran Sekretaris yaitu:",
                peran: [
                    { highlight: "Memimpin", text: "HIMTIKA" },
                    { highlight: "Mengkoordinasi", text: "kesekretariatan" },
                    { highlight: "Menetapkan", text: "kebijakan" },
                    { highlight: "Bertanggung jawab", text: "administrasi" }
                ],
                members: [
                    { photo: "assets/img/anggota/sc/5.png", firstName: "Nama", lastName: "Sekretaris Umum", role: "Sekretaris Umum HIMTIKA", highlight: "Nama" },
                    { photo: "assets/img/anggota/sc/6.png", firstName: "Nama", lastName: "Wakil Sekretaris", role: "Wakil Sekretaris Umum", highlight: "Nama" }
                ]
            },
            bendahara: {
                label: "Keuangan",
                title: "Bendahara",
                description: "Merupakan penanggung jawab dan koordinator di bidang keuangan HIMTIKA.",
                peranLabel: "Peran Bendahara yaitu:",
                peran: [
                    { highlight: "Memimpin", text: "HIMTIKA" },
                    { highlight: "Mengkoordinasi", text: "pengurus" },
                    { highlight: "Menetapkan", text: "kebijakan" },
                    { highlight: "Bertanggung jawab", text: "kegiatan" }
                ],
                members: [
                    { photo: "assets/img/anggota/sc/7.png", firstName: "Nama", lastName: "Bendahara Umum", role: "Bendahara Umum HIMTIKA", highlight: "Nama" },
                    { photo: "assets/img/anggota/sc/8.png", firstName: "Nama", lastName: "Wakil Bendahara", role: "Wakil Bendahara Umum", highlight: "Nama" }
                ]
            }
        }
    },
    {
        name: "RnD",
        desc: "Inovasi dan pengembangan teknologi",
        img: "assets/img/divisi/rnd.png",
        count: 8,
        about: {
            title: "Divisi RnD",
            description: "Divisi Research and Development (RnD) merupakan divisi yang menjadi ujung tombak dalam penerapan teknologi informasi. Divisi ini fokus pada peningkatan kualitas di lingkungan HIMTIKA dan program studi Informatika UNSIKA. Selain itu, RnD juga berperan sebagai IT Support untuk mendukung optimalisasi kinerja HIMTIKA.",
            bgIcon: "assets/img/icon/icon_rnd.png",
            departments: [
                {
                    name: "Research Development",
                    desc: "Mengembangkan ide, melakukan riset, serta merancang inovasi dan solusi untuk pengembangan produk maupun layanan.",
                    members: [
                        { photo: "assets/img/divisi/kadiv_rnd.png", firstName: "Raika", lastName: "Maulana Dwi Putra", role: "Ketua Divisi RnD", highlight: "Raika" },
                        { photo: "assets/img/anggota/rnd/rafisyah.png", firstName: "M", lastName: "Rafisyah Rizkiyawan", role: "Ketua Dept Research", highlight: "Rafisyah" },
                        { photo: "assets/img/anggota/rnd/rafli.png", firstName: "Rafli", lastName: "Rizqi Fadillah", role: "Ketua Dept Product", highlight: "Rafli" },
                        { photo: "assets/img/anggota/rnd/ali.png", firstName: "Mohammed Ali", lastName: "Irsyad Ginting", role: "Anggota Dept Research", highlight: "Irsyad" }
                    ],
                    proker: [
                        {
                            title: "Software House",
                            pic: "Nanang Saepudin",
                            desc: "Software House adalah program kerja yang berfokus pada penelitian dan pengembangan produk digital HIMTIKA berupa website dan aplikasi mobile. Program ini menjadi wadah bagi mahasiswa Informatika untuk menyampaikan ide atau kebutuhan yang kemudian dianalisis dan dikembangkan bersama HIMTIKA Software Development menjadi produk digital yang bermanfaat.",
                            mainImg: "assets/img/proker/rnd/software_house_main.png",
                            thumbs: [
                                "assets/img/proker/rnd/software_house_1.png",
                                "assets/img/proker/rnd/software_house_2.png",
                                "assets/img/proker/rnd/software_house_3.png"
                            ]
                        },
                        {
                            title: "IT Support",
                            pic: "Nama Penanggung Jawab",
                            desc: "Menyediakan dukungan teknis kepada seluruh divisi HIMTIKA terkait perangkat, jaringan, dan sistem digital agar kegiatan organisasi berjalan lancar tanpa kendala teknis.",
                            mainImg: "assets/img/proker/rnd/it_support_main.png",
                            thumbs: ["assets/img/proker/rnd/it_support_1.png", "assets/img/proker/rnd/it_support_2.png"]
                        },
                        {
                            title: "Riset Teknologi Terapan",
                            pic: "Nama Penanggung Jawab",
                            desc: "Melakukan riset mengenai tren dan kebutuhan teknologi terapan yang relevan untuk diterapkan dalam lingkungan HIMTIKA dan program studi Informatika.",
                            mainImg: "assets/img/proker/rnd/riset_main.png",
                            thumbs: ["assets/img/proker/rnd/riset_1.png", "assets/img/proker/rnd/riset_2.png", "assets/img/proker/rnd/riset_3.png"]
                        }
                    ]
                },
                {
                    name: "Product Development",
                    desc: "Merancang, membangun, dan menyempurnakan produk digital HIMTIKA mulai dari konsep hingga implementasi yang siap digunakan.",
                    members: [
                        { photo: "assets/img/divisi/rnd_card.png", firstName: "Nama", lastName: "Ketua Dept", role: "Ketua Dept Product", highlight: "Nama" },
                        { photo: "assets/img/divisi/rnd_card.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Product", highlight: "Nama" },
                        { photo: "assets/img/divisi/rnd_card.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Product", highlight: "Nama" },
                        { photo: "assets/img/divisi/rnd_card.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Product", highlight: "Nama" }
                    ],
                    proker: [
                        {
                            title: "UI/UX Design Sprint",
                            pic: "Nama Penanggung Jawab",
                            desc: "Merancang antarmuka dan pengalaman pengguna untuk seluruh produk digital HIMTIKA melalui proses design sprint yang terstruktur dan kolaboratif.",
                            mainImg: "assets/img/proker/rnd/uiux_main.png",
                            thumbs: ["assets/img/proker/rnd/uiux_1.png", "assets/img/proker/rnd/uiux_2.png"]
                        },
                        {
                            title: "Maintenance & Update Sistem",
                            pic: "Nama Penanggung Jawab",
                            desc: "Melakukan pemeliharaan rutin dan pembaruan berkala pada produk digital HIMTIKA yang telah diluncurkan agar tetap optimal dan aman digunakan.",
                            mainImg: "assets/img/proker/rnd/maintenance_main.png",
                            thumbs: ["assets/img/proker/rnd/maintenance_1.png", "assets/img/proker/rnd/maintenance_2.png"]
                        }
                    ]
                }
            ],
            kadiv: {
                photo: "assets/img/divisi/kadiv_rnd.png",
                firstName: "Raika",
                lastName: "Maulana Dwi Putra",
                role: "Ketua Divisi RnD",
                scale: 1.35,
                posY: "0%"
            }
        }
    },
    {
        name: "Infokom",
        desc: "Media dan informasi digital",
        img: "assets/img/divisi/infokom.png",
        count: 7,
        about: {
            title: "Divisi Infokom",
            description: "Divisi Informasi dan Komunikasi (Infokom) bertanggung jawab dalam mengelola seluruh media komunikasi HIMTIKA kepada publik dan anggota. Divisi ini memastikan setiap informasi tersampaikan secara efektif, kreatif, dan tepat sasaran melalui berbagai platform digital.",
            bgIcon: "assets/img/icon/icon_infokom.png",
            departments: [
                {
                    name: "Media Sosial & Konten",
                    desc: "Mengelola konten dan strategi media sosial HIMTIKA agar setiap informasi tersampaikan secara kreatif dan menarik.",
                    members: [
                        { photo: "assets/img/anggota/infokom/1.png", firstName: "Nama", lastName: "Ketua Dept", role: "Ketua Dept Media Sosial", highlight: "Nama" },
                        { photo: "assets/img/anggota/infokom/2.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Media Sosial", highlight: "Nama" },
                        { photo: "assets/img/anggota/infokom/3.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Media Sosial", highlight: "Nama" }
                    ],
                    proker: [
                        {
                            title: "Konten Kreatif HIMTIKA",
                            pic: "Nama Penanggung Jawab",
                            desc: "Memproduksi konten kreatif secara berkala untuk media sosial HIMTIKA guna meningkatkan engagement dan menyampaikan informasi secara menarik kepada anggota dan publik.",
                            mainImg: "assets/img/proker/infokom/konten_main.png",
                            thumbs: ["assets/img/proker/infokom/konten_1.png", "assets/img/proker/infokom/konten_2.png", "assets/img/proker/infokom/konten_3.png"]
                        },
                        {
                            title: "Live Report & Takeover",
                            pic: "Nama Penanggung Jawab",
                            desc: "Menyajikan laporan langsung melalui media sosial pada setiap kegiatan besar HIMTIKA agar seluruh anggota dapat mengikuti perkembangan acara secara real-time.",
                            mainImg: "assets/img/proker/infokom/livereport_main.png",
                            thumbs: ["assets/img/proker/infokom/livereport_1.png", "assets/img/proker/infokom/livereport_2.png"]
                        }
                    ]
                },
                {
                    name: "Jurnalistik & Dokumentasi",
                    desc: "Mendokumentasikan setiap kegiatan HIMTIKA serta menyusun liputan dan publikasi yang informatif bagi seluruh anggota.",
                    members: [
                        { photo: "assets/img/anggota/infokom/4.png", firstName: "Nama", lastName: "Ketua Dept", role: "Ketua Dept Jurnalistik", highlight: "Nama" },
                        { photo: "assets/img/anggota/infokom/5.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Jurnalistik", highlight: "Nama" }
                    ],
                    proker: [
                        {
                            title: "Dokumentasi Kegiatan HIMTIKA",
                            pic: "Nama Penanggung Jawab",
                            desc: "Mengabadikan setiap momen kegiatan HIMTIKA dalam bentuk foto dan video sebagai arsip organisasi dan bahan publikasi media sosial.",
                            mainImg: "assets/img/proker/infokom/dokumentasi_main.png",
                            thumbs: ["assets/img/proker/infokom/dokumentasi_1.png", "assets/img/proker/infokom/dokumentasi_2.png"]
                        }
                    ]
                }
            ],
            kadiv: {
                photo: "assets/img/divisi/kadiv_infokom.png",
                firstName: "Nama",
                lastName: "Ketua Infokom",
                role: "Ketua Divisi Infokom",
                scale: 1.1,
                posY: "0%"
            }
        }
    },
    {
        name: "Internal",
        desc: "Manajemen dan koordinasi internal",
        img: "assets/img/divisi/internal.png",
        count: 5,
        about: {
            title: "Divisi Internal",
            description: "Divisi Internal berperan sebagai tulang punggung keorganisasian HIMTIKA. Divisi ini mengelola administrasi, keuangan, serta kesejahteraan seluruh anggota HIMTIKA agar iklim organisasi tetap kondusif, solid, dan berkelanjutan.",
            bgIcon: "assets/img/icon/icon_internal.png",
            departments: [
                {
                    name: "Administrasi & Kesekretariatan",
                    desc: "Mengelola seluruh kebutuhan administrasi dan kesekretariatan agar tata kelola organisasi tetap rapi dan terstruktur.",
                    members: [
                        { photo: "assets/img/anggota/internal/1.png", firstName: "Nama", lastName: "Ketua Dept", role: "Ketua Dept Administrasi", highlight: "Nama" },
                        { photo: "assets/img/anggota/internal/2.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Administrasi", highlight: "Nama" }
                    ],
                    proker: [
                        {
                            title: "Pengarsipan Surat & Dokumen",
                            pic: "Nama Penanggung Jawab",
                            desc: "Mengelola dan mengarsipkan seluruh surat masuk, surat keluar, serta dokumen penting organisasi secara rapi dan terstruktur untuk memudahkan akses di kemudian hari.",
                            mainImg: "assets/img/proker/internal/arsip_main.png",
                            thumbs: ["assets/img/proker/internal/arsip_1.png", "assets/img/proker/internal/arsip_2.png"]
                        }
                    ]
                },
                {
                    name: "Keuangan & Bendahara",
                    desc: "Mengelola keuangan organisasi secara transparan dan akuntabel untuk mendukung seluruh program kerja HIMTIKA.",
                    members: [
                        { photo: "assets/img/anggota/internal/3.png", firstName: "Nama", lastName: "Ketua Dept", role: "Ketua Dept Keuangan", highlight: "Nama" },
                        { photo: "assets/img/anggota/internal/4.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Keuangan", highlight: "Nama" }
                    ],
                    proker: [
                        {
                            title: "Laporan Keuangan Berkala",
                            pic: "Nama Penanggung Jawab",
                            desc: "Menyusun dan mempublikasikan laporan keuangan organisasi secara berkala sebagai bentuk transparansi kepada seluruh anggota HIMTIKA.",
                            mainImg: "assets/img/proker/internal/laporan_main.png",
                            thumbs: ["assets/img/proker/internal/laporan_1.png", "assets/img/proker/internal/laporan_2.png"]
                        },
                        {
                            title: "Penggalangan Dana Mandiri",
                            pic: "Nama Penanggung Jawab",
                            desc: "Menjalankan inisiatif penggalangan dana mandiri melalui kewirausahaan kecil untuk mendukung kas organisasi secara berkelanjutan.",
                            mainImg: "assets/img/proker/internal/danamandiri_main.png",
                            thumbs: ["assets/img/proker/internal/danamandiri_1.png", "assets/img/proker/internal/danamandiri_2.png"]
                        }
                    ]
                }
            ],
            kadiv: {
                photo: "assets/img/divisi/kadiv_internal.png",
                firstName: "Nama",
                lastName: "Ketua Internal",
                role: "Ketua Divisi Internal",
                scale: 1.15,
                posY: "5%"
            }
        }
    },
    {
        name: "Relasi",
        desc: "Kerjasama dan hubungan eksternal",
        img: "assets/img/divisi/relasi.png",
        count: 6,
        about: {
            title: "Divisi Relasi",
            description: "Divisi Relasi menjalin dan mengembangkan kerjasama strategis antara HIMTIKA dengan berbagai pihak eksternal, mulai dari perusahaan, institusi pendidikan, komunitas teknologi, hingga organisasi mahasiswa lainnya. Divisi ini membuka peluang kolaborasi yang bermanfaat bagi seluruh anggota.",
            bgIcon: "assets/img/icon/icon_relasi.png",
            departments: [
                {
                    name: "Hubungan Eksternal",
                    desc: "Menjalin komunikasi dan kerjasama dengan pihak eksternal untuk membuka peluang kolaborasi bagi HIMTIKA.",
                    members: [
                        { photo: "assets/img/anggota/relasi/1.png", firstName: "Nama", lastName: "Ketua Dept", role: "Ketua Dept Hubungan Eksternal", highlight: "Nama" },
                        { photo: "assets/img/anggota/relasi/2.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Hubungan Eksternal", highlight: "Nama" },
                        { photo: "assets/img/anggota/relasi/3.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Hubungan Eksternal", highlight: "Nama" },
                        { photo: "assets/img/anggota/relasi/4.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Hubungan Eksternal", highlight: "Nama" }
                    ],
                    proker: [
                        {
                            title: "Kunjungan Studi Banding",
                            pic: "Nama Penanggung Jawab",
                            desc: "Mengadakan kunjungan studi banding ke himpunan mahasiswa Informatika di kampus lain untuk bertukar wawasan dan memperluas jejaring organisasi.",
                            mainImg: "assets/img/proker/relasi/studibanding_main.png",
                            thumbs: ["assets/img/proker/relasi/studibanding_1.png", "assets/img/proker/relasi/studibanding_2.png"]
                        },
                        {
                            title: "Kerjasama Antar Himpunan",
                            pic: "Nama Penanggung Jawab",
                            desc: "Membangun hubungan kerjasama jangka panjang dengan himpunan mahasiswa Informatika dari berbagai universitas untuk kegiatan kolaboratif.",
                            mainImg: "assets/img/proker/relasi/kerjasama_main.png",
                            thumbs: ["assets/img/proker/relasi/kerjasama_1.png", "assets/img/proker/relasi/kerjasama_2.png"]
                        },
                        {
                            title: "Roadshow Industri",
                            pic: "Nama Penanggung Jawab",
                            desc: "Mengunjungi perusahaan teknologi untuk membangun relasi dan membuka peluang magang maupun kerjasama bagi anggota HIMTIKA.",
                            mainImg: "assets/img/proker/relasi/roadshow_main.png",
                            thumbs: ["assets/img/proker/relasi/roadshow_1.png", "assets/img/proker/relasi/roadshow_2.png"]
                        }
                    ]
                },
                {
                    name: "Kemitraan & Sponsorship",
                    desc: "Membangun kemitraan strategis dan mencari peluang sponsorship untuk mendukung kelancaran kegiatan HIMTIKA.",
                    members: [
                        { photo: "assets/img/anggota/relasi/5.png", firstName: "Nama", lastName: "Ketua Dept", role: "Ketua Dept Kemitraan", highlight: "Nama" },
                        { photo: "assets/img/anggota/relasi/6.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Kemitraan", highlight: "Nama" }
                    ],
                    proker: [
                        {
                            title: "Penjajakan Sponsorship Event",
                            pic: "Nama Penanggung Jawab",
                            desc: "Mencari dan menjalin kemitraan dengan sponsor untuk mendukung pendanaan setiap event besar yang diselenggarakan HIMTIKA.",
                            mainImg: "assets/img/proker/relasi/sponsorship_main.png",
                            thumbs: ["assets/img/proker/relasi/sponsorship_1.png", "assets/img/proker/relasi/sponsorship_2.png"]
                        }
                    ]
                }
            ],
            kadiv: {
                photo: "assets/img/divisi/kadiv_relasi.png",
                firstName: "Nama",
                lastName: "Ketua Relasi",
                role: "Ketua Divisi Relasi",
                scale: 1.1,
                posY: "0%"
            }
        }
    },
    {
        name: "Edukasi",
        desc: "Pengembangan ilmu dan workshop",
        img: "assets/img/divisi/edukasi.png",
        count: 7,
        about: {
            title: "Divisi Edukasi",
            description: "Divisi Edukasi berkomitmen meningkatkan kapasitas akademik dan non-akademik anggota HIMTIKA melalui berbagai program pembelajaran. Divisi ini menyelenggarakan workshop, seminar, study club, dan pelatihan yang relevan dengan kebutuhan mahasiswa Informatika di era digital.",
            bgIcon: "assets/img/icon/icon_edukasi.png",
            departments: [
                {
                    name: "Akademik & Pelatihan",
                    desc: "Menyelenggarakan workshop, seminar, dan pelatihan untuk meningkatkan kapasitas akademik mahasiswa Informatika.",
                    members: [
                        { photo: "assets/img/anggota/edukasi/1.png", firstName: "Nama", lastName: "Ketua Dept", role: "Ketua Dept Akademik", highlight: "Nama" },
                        { photo: "assets/img/anggota/edukasi/2.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Akademik", highlight: "Nama" },
                        { photo: "assets/img/anggota/edukasi/3.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Akademik", highlight: "Nama" }
                    ],
                    proker: [
                        {
                            title: "Study Club Informatika",
                            pic: "Nama Penanggung Jawab",
                            desc: "Mengadakan kelompok belajar rutin bagi mahasiswa Informatika untuk memperdalam materi perkuliahan dan mempersiapkan diri menghadapi dunia kerja.",
                            mainImg: "assets/img/proker/edukasi/studyclub_main.png",
                            thumbs: ["assets/img/proker/edukasi/studyclub_1.png", "assets/img/proker/edukasi/studyclub_2.png", "assets/img/proker/edukasi/studyclub_3.png"]
                        },
                        {
                            title: "Seminar & Workshop Teknologi",
                            pic: "Nama Penanggung Jawab",
                            desc: "Menyelenggarakan seminar dan workshop bertema teknologi terkini untuk menambah wawasan dan keterampilan praktis mahasiswa Informatika.",
                            mainImg: "assets/img/proker/edukasi/seminar_main.png",
                            thumbs: ["assets/img/proker/edukasi/seminar_1.png", "assets/img/proker/edukasi/seminar_2.png"]
                        }
                    ]
                },
                {
                    name: "Kompetisi & Pengembangan",
                    desc: "Mendorong partisipasi anggota dalam berbagai kompetisi serta program pengembangan diri di bidang teknologi.",
                    members: [
                        { photo: "assets/img/anggota/edukasi/4.png", firstName: "Nama", lastName: "Ketua Dept", role: "Ketua Dept Kompetisi", highlight: "Nama" },
                        { photo: "assets/img/anggota/edukasi/5.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Kompetisi", highlight: "Nama" }
                    ],
                    proker: [
                        {
                            title: "Bootcamp Kompetitif",
                            pic: "Nama Penanggung Jawab",
                            desc: "Mempersiapkan anggota HIMTIKA mengikuti berbagai kompetisi teknologi tingkat nasional melalui pelatihan intensif dan terarah.",
                            mainImg: "assets/img/proker/edukasi/bootcamp_main.png",
                            thumbs: ["assets/img/proker/edukasi/bootcamp_1.png", "assets/img/proker/edukasi/bootcamp_2.png"]
                        },
                        {
                            title: "Pendampingan Lomba",
                            pic: "Nama Penanggung Jawab",
                            desc: "Memberikan pendampingan teknis dan strategi kepada tim yang akan mengikuti lomba programming maupun hackathon.",
                            mainImg: "assets/img/proker/edukasi/pendampingan_main.png",
                            thumbs: ["assets/img/proker/edukasi/pendampingan_1.png", "assets/img/proker/edukasi/pendampingan_2.png"]
                        },
                        {
                            title: "Sertifikasi Kompetensi",
                            pic: "Nama Penanggung Jawab",
                            desc: "Memfasilitasi anggota HIMTIKA untuk mengikuti program sertifikasi kompetensi di bidang teknologi informasi guna meningkatkan daya saing.",
                            mainImg: "assets/img/proker/edukasi/sertifikasi_main.png",
                            thumbs: ["assets/img/proker/edukasi/sertifikasi_1.png", "assets/img/proker/edukasi/sertifikasi_2.png"]
                        },
                        {
                            title: "Coding Challenge Internal",
                            pic: "Nama Penanggung Jawab",
                            desc: "Mengadakan kompetisi coding internal secara rutin untuk mengasah kemampuan logika dan pemrograman anggota HIMTIKA secara berkelanjutan.",
                            mainImg: "assets/img/proker/edukasi/coding_main.png",
                            thumbs: ["assets/img/proker/edukasi/coding_1.png", "assets/img/proker/edukasi/coding_2.png"]
                        },
                        {
                            title: "Hackathon HIMTIKA",
                            pic: "Nama Penanggung Jawab",
                            desc: "Menyelenggarakan hackathon tahunan sebagai wadah bagi mahasiswa Informatika untuk berinovasi menciptakan solusi digital dalam waktu singkat.",
                            mainImg: "assets/img/proker/edukasi/hackathon_main.png",
                            thumbs: ["assets/img/proker/edukasi/hackathon_1.png", "assets/img/proker/edukasi/hackathon_2.png", "assets/img/proker/edukasi/hackathon_3.png"]
                        }
                    ]
                }
            ],
            kadiv: {
                photo: "assets/img/divisi/kadiv_edukasi.png",
                firstName: "Nama",
                lastName: "Ketua Edukasi",
                role: "Ketua Divisi Edukasi",
                scale: 1.15,
                posY: "5%"
            }
        }
    }
];

let currentIndex = 0; // Mulai dari Steering Committee
const CARD_SPACING = 501; // jarak antar kartu (lebar 476 + gap 25), dipakai untuk translateX

// Bangun semua kartu SEKALI saja. Geser/posisi selanjutnya hanya mengubah
// style transform & opacity tiap kartu yang sudah ada, supaya transisi CSS
// jalan mulus seperti "memutar" carousel, bukan reset ke render baru.
function buildSlider() {
    const slider = document.getElementById('divisionSlider');
    if (!slider) return;

    slider.innerHTML = '';

    divisions.forEach((div, index) => {
        const card = document.createElement('div');
        card.className = 'division-card';
        card.dataset.index = index;
        card.innerHTML = `
            <img src="${div.img}" alt="${div.name}" onerror="this.src='assets/img/logo/Himtika.png';">
            <div class="card-badge-label">Divisi</div>
            <div class="card-badge-count"><i class="fas fa-user"></i> ${div.count}</div>
            <div class="card-info">
                <h3>${div.name}</h3>
                <p>${div.desc}</p>
            </div>
        `;
        card.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
        slider.appendChild(card);
    });
}

function buildDots() {
    const dotsContainer = document.getElementById('sliderDots');
    if (!dotsContainer) return;

    dotsContainer.innerHTML = '';

    divisions.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.dataset.index = index;
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
        dotsContainer.appendChild(dot);
    });
}

// Hitung jarak melingkar terpendek dari sebuah kartu ke currentIndex,
// supaya transisi dari kartu terakhir ke kartu pertama (dan sebaliknya)
// tetap berasa "memutar" pendek, bukan loncat jauh ke ujung lain.
function getCircularDiff(index, total) {
    let diff = index - currentIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
}

function updateSlider() {
    const slider = document.getElementById('divisionSlider');
    if (!slider) return;

    const total = divisions.length;
    const cards = Array.from(slider.children);

    cards.forEach((card) => {
        const index = parseInt(card.dataset.index, 10);
        const diff = getCircularDiff(index, total);
        const absDiff = Math.abs(diff);

        let scale = 0.7;
        let opacity = 0;
        let zIndex = 10 - absDiff;
        let liftY = 0;

        if (absDiff === 0) {
            scale = 1.06;
            opacity = 1;
            liftY = -10;
        } else if (absDiff === 1) {
            scale = 0.86;
            opacity = 1;
        } else if (absDiff === 2) {
            scale = 0.72;
            opacity = 0.45;
        }

        card.style.transform = `translateX(${diff * CARD_SPACING}px) translateY(${liftY}px) scale(${scale})`;
        card.style.opacity = opacity;
        card.style.zIndex = zIndex;
        card.style.pointerEvents = absDiff > 2 ? 'none' : 'auto';
        card.classList.toggle('active', absDiff === 0);
    });

    const dots = document.querySelectorAll('#sliderDots .dot');
    dots.forEach((dot) => {
        const index = parseInt(dot.dataset.index, 10);
        dot.classList.toggle('active', index === currentIndex);
    });

    // Update about section sesuai divisi aktif
    updateAboutSection(currentIndex);
    updateWakilSection(currentIndex);
    updateSekretarisSection(currentIndex);
    updateBendaharaSection(currentIndex);
    updateDepartmentSections(currentIndex);
    updateProkerSection(currentIndex, 0, 0);
}

// ==================== ABOUT SECTION UPDATER ====================
let aboutUpdateTimeout = null;

function updateAboutSection(index) {
    const div = divisions[index];
    if (!div || !div.about) return;

    const about = div.about;

    // Elemen-elemen yang akan diupdate
    const elTitle      = document.getElementById('aboutDivisionName');
    const elCardTitle  = document.getElementById('aboutCardTitle');
    const elCardSpan   = document.getElementById('aboutCardSpan');
    const elDesc       = document.getElementById('aboutCardDesc');
    const elDeptList   = document.getElementById('aboutDeptList');
    const elPhoto      = document.getElementById('aboutKadivPhoto');
    const elBgIcon     = document.getElementById('aboutBgIcon');
    const elFirstName  = document.getElementById('badgeFirstName');
    const elLastName   = document.getElementById('badgeLastName');
    const elRole       = document.getElementById('badgeRole');
    const card         = document.getElementById('aboutCard');

    if (!card) return;

    // Fade out dulu
    card.classList.add('about-fade-out');
    if (elTitle) elTitle.style.opacity = '0';

    clearTimeout(aboutUpdateTimeout);
    aboutUpdateTimeout = setTimeout(() => {
        // Update semua teks
        if (elTitle)     elTitle.textContent   = about.title;
        if (elCardSpan)  elCardSpan.textContent = about.title;
        if (elCardTitle) elCardTitle.innerHTML  = `Kenali Lebih Dalam<br>Tentang <span class="about-gold" id="aboutCardSpan">${about.title}</span>`;
        if (elDesc)      elDesc.textContent     = about.description;

        // Update departemen (list ringkas di about-card)
        if (elDeptList) {
            elDeptList.innerHTML = about.departments
                .map(d => `<li><img src="assets/img/icon/icon_frame.png" alt="" class="dept-icon"> Departemen <span class="about-gold">${d.name}</span></li>`)
                .join('');
        }

        // Update foto kadiv
        if (elPhoto) {
            elPhoto.src = about.kadiv.photo;
            elPhoto.alt = about.kadiv.role;
            // Framing per kadiv: tiap foto sumber punya proporsi & posisi
            // kepala yang beda, jadi scale & posisi vertikal diatur per
            // divisi supaya hasilnya konsisten seperti foto RnD.
            elPhoto.style.setProperty('--photo-scale', about.kadiv.scale || 1.15);
            elPhoto.style.setProperty('--photo-pos-y', about.kadiv.posY || '5%');
        }

        // Update icon dekorasi belakang kadiv (beda tiap divisi)
        if (elBgIcon && about.bgIcon) {
            elBgIcon.src = about.bgIcon;
        }

        if (elFirstName) elFirstName.textContent = about.kadiv.firstName;
        if (elLastName)  elLastName.textContent   = about.kadiv.lastName;
        if (elRole)      elRole.textContent        = about.kadiv.role;

        // Fade in kembali
        card.classList.remove('about-fade-out');
        if (elTitle) elTitle.style.opacity = '1';
    }, 280); // sedikit lebih pendek dari transisi CSS (0.4s)
}

// ==================== WAKIL KETUA SECTION UPDATER ====================
// Card tambahan khusus divisi Steering Committee: sama polanya seperti
// about-card utama, hanya saja fotonya tampil di kiri (via class
// .about-card-mirror) dan berisi checklist "Peran ... yaitu" alih-alih
// daftar departemen. Divisi lain yang tidak punya field `about.wakil`
// akan menyembunyikan card ini sepenuhnya.
let wakilUpdateTimeout = null;

function renderPeranItem(item) {
    return `<li><img src="assets/img/icon/icon_check.png" alt="" class="peran-check-icon" onerror="this.style.display='none'"> <span class="about-gold">${item.highlight}</span> ${item.text}</li>`;
}

function updateWakilSection(index) {
    const div = divisions[index];
    const card = document.getElementById('aboutCardWakil');
    if (!card) return;

    const wakil = div && div.about && div.about.wakil;

    // Divisi tanpa data wakil (semua kecuali Steering Committee): sembunyikan
    if (!wakil) {
        clearTimeout(wakilUpdateTimeout);
        card.classList.remove('about-fade-out');
        card.style.display = 'none';
        return;
    }

    const elCardSpan    = document.getElementById('aboutWakilCardSpan');
    const elDesc        = document.getElementById('aboutWakilCardDesc');
    const elPeranLabel  = document.getElementById('aboutWakilPeranLabel');
    const elPeranGrid   = document.getElementById('aboutWakilPeranGrid');
    const elPhoto       = document.getElementById('aboutWakilPhoto');
    const elBgIcon      = document.getElementById('aboutWakilBgIcon');
    const elFirstName   = document.getElementById('badgeWakilFirstName');
    const elLastName    = document.getElementById('badgeWakilLastName');
    const elRole        = document.getElementById('badgeWakilRole');

    card.classList.add('about-fade-out');

    clearTimeout(wakilUpdateTimeout);
    wakilUpdateTimeout = setTimeout(() => {
        card.style.display = '';

        if (elCardSpan)   elCardSpan.textContent   = wakil.title;
        if (elDesc)       elDesc.textContent       = wakil.description;
        if (elPeranLabel) elPeranLabel.textContent = wakil.peranLabel;
        if (elPeranGrid) {
            elPeranGrid.innerHTML = (wakil.peran || []).map(renderPeranItem).join('');
        }

        if (elPhoto) {
            elPhoto.src = wakil.photo;
            elPhoto.alt = wakil.role;
            elPhoto.style.setProperty('--photo-scale', wakil.scale || 1.15);
            elPhoto.style.setProperty('--photo-pos-y', wakil.posY || '5%');
        }

        if (elBgIcon && div.about.bgIcon) {
            elBgIcon.src = div.about.bgIcon;
        }

        if (elFirstName) elFirstName.textContent = wakil.firstName;
        if (elLastName)  elLastName.textContent  = wakil.lastName;
        if (elRole)       elRole.textContent      = wakil.role;

        card.classList.remove('about-fade-out');
    }, 280);
}

// ==================== ADMINISTRASI SEKRETARIS SECTION UPDATER ====================
// Card tambahan lain khusus Steering Committee: tampilan label kecil + judul
// besar (mirip gaya "Dept. X"), lalu checklist "Peran ... yaitu" (dipakai
// ulang dari pola about-peran-grid), dan di kanan menampilkan 2 foto
// (Sekretaris Umum & Wakil Sekretaris Umum) memakai komponen member-card
// yang sama dengan yang dipakai di section departemen.
let sekretarisUpdateTimeout = null;

function updateSekretarisSection(index) {
    const div = divisions[index];
    const card = document.getElementById('aboutCardSekretaris');
    if (!card) return;

    const sekretaris = div && div.about && div.about.sekretaris;

    // Divisi tanpa data sekretaris (semua kecuali Steering Committee): sembunyikan
    if (!sekretaris) {
        clearTimeout(sekretarisUpdateTimeout);
        card.classList.remove('about-fade-out');
        card.style.display = 'none';
        return;
    }

    const elLabel      = document.getElementById('aboutSekretarisLabel');
    const elTitle      = document.getElementById('aboutSekretarisTitle');
    const elDesc       = document.getElementById('aboutSekretarisDesc');
    const elPeranLabel = document.getElementById('aboutSekretarisPeranLabel');
    const elPeranGrid  = document.getElementById('aboutSekretarisPeranGrid');
    const elMemberGrid = document.getElementById('aboutSekretarisMemberGrid');
    const elBgIcon     = document.getElementById('aboutSekretarisBgIcon');

    card.classList.add('about-fade-out');

    clearTimeout(sekretarisUpdateTimeout);
    sekretarisUpdateTimeout = setTimeout(() => {
        card.style.display = '';

        if (elLabel)      elLabel.textContent      = sekretaris.label;
        if (elTitle)      elTitle.textContent       = sekretaris.title;
        if (elDesc)       elDesc.textContent        = sekretaris.description;
        if (elPeranLabel) elPeranLabel.textContent  = sekretaris.peranLabel;
        if (elPeranGrid) {
            elPeranGrid.innerHTML = (sekretaris.peran || []).map(renderPeranItem).join('');
        }
        if (elMemberGrid) {
            elMemberGrid.innerHTML = (sekretaris.members || []).map(renderMemberCard).join('');
        }

        if (elBgIcon && div.about.bgIcon) {
            elBgIcon.src = div.about.bgIcon;
        }

        card.classList.remove('about-fade-out');
    }, 280);
}

// ==================== KEUANGAN BENDAHARA SECTION UPDATER ====================
// Sama persis polanya dengan updateSekretarisSection, hanya beda ID elemen
// dan card-nya pakai class .about-card-mirror supaya foto tampil di kiri.
let bendaharaUpdateTimeout = null;

function updateBendaharaSection(index) {
    const div = divisions[index];
    const card = document.getElementById('aboutCardBendahara');
    if (!card) return;

    const bendahara = div && div.about && div.about.bendahara;

    // Divisi tanpa data bendahara (semua kecuali Steering Committee): sembunyikan
    if (!bendahara) {
        clearTimeout(bendaharaUpdateTimeout);
        card.classList.remove('about-fade-out');
        card.style.display = 'none';
        return;
    }

    const elLabel      = document.getElementById('aboutBendaharaLabel');
    const elTitle      = document.getElementById('aboutBendaharaTitle');
    const elDesc       = document.getElementById('aboutBendaharaDesc');
    const elPeranLabel = document.getElementById('aboutBendaharaPeranLabel');
    const elPeranGrid  = document.getElementById('aboutBendaharaPeranGrid');
    const elMemberGrid = document.getElementById('aboutBendaharaMemberGrid');
    const elBgIcon     = document.getElementById('aboutBendaharaBgIcon');

    card.classList.add('about-fade-out');

    clearTimeout(bendaharaUpdateTimeout);
    bendaharaUpdateTimeout = setTimeout(() => {
        card.style.display = '';

        if (elLabel)      elLabel.textContent      = bendahara.label;
        if (elTitle)      elTitle.textContent       = bendahara.title;
        if (elDesc)       elDesc.textContent        = bendahara.description;
        if (elPeranLabel) elPeranLabel.textContent  = bendahara.peranLabel;
        if (elPeranGrid) {
            elPeranGrid.innerHTML = (bendahara.peran || []).map(renderPeranItem).join('');
        }
        if (elMemberGrid) {
            elMemberGrid.innerHTML = (bendahara.members || []).map(renderMemberCard).join('');
        }

        if (elBgIcon && div.about.bgIcon) {
            elBgIcon.src = div.about.bgIcon;
        }

        card.classList.remove('about-fade-out');
    }, 280);
}


// Setiap divisi punya 2 departemen, masing-masing punya section sendiri
// (#deptSection1 & #deptSection2) yang isinya diganti sesuai divisi aktif,
// dengan pola yang sama seperti about-card: fade-out -> ganti konten -> fade-in.

// Bungkus nama dengan highlight emas pada kata yang ditandai di data
// (mis. nickname/panggilan), sisanya tetap putih.
function renderMemberName(member) {
    const full = `${member.firstName} ${member.lastName}`.trim();
    if (!member.highlight) return full;

    const idx = full.indexOf(member.highlight);
    if (idx === -1) return full;

    const before = full.slice(0, idx);
    const match = full.slice(idx, idx + member.highlight.length);
    const after = full.slice(idx + member.highlight.length);

    return `${before}<span class="member-name-gold">${match}</span>${after}`;
}

function renderMemberCard(member) {
    return `
        <div class="member-card">
            <img
                src="${member.photo}"
                alt="${member.firstName} ${member.lastName}"
                class="member-photo"
                onerror="this.src='assets/img/logo/Himtika.png'"
            >
            <div class="member-info">
                <h4 class="member-name">${renderMemberName(member)}</h4>
                <p class="member-role">${member.role}</p>
            </div>
        </div>
    `;
}

const deptUpdateTimeouts = [null, null];

function updateDepartmentSections(index) {
    const div = divisions[index];
    if (!div || !div.about || !div.about.departments) return;

    const departments = div.about.departments;

    [0, 1].forEach((deptIndex) => {
        const dept = departments[deptIndex];
        const section = document.getElementById(`deptSection${deptIndex + 1}`);
        if (!section) return;

        const elLabel = section.querySelector('.dept-section-label');
        const elName  = section.querySelector('.dept-section-name');
        const elDesc  = section.querySelector('.dept-section-desc');
        const elGrid  = section.querySelector('.member-grid');

        section.classList.add('dept-fade-out');

        clearTimeout(deptUpdateTimeouts[deptIndex]);
        deptUpdateTimeouts[deptIndex] = setTimeout(() => {
            if (!dept) {
                // Divisi ini tidak punya departemen kedua, sembunyikan section
                section.style.display = 'none';
                return;
            }

            section.style.display = '';
            if (elLabel) elLabel.textContent = 'Departemen';
            if (elName)  elName.textContent  = dept.name;
            if (elDesc)  elDesc.textContent  = dept.desc || '';
            if (elGrid)  elGrid.innerHTML    = (dept.members || []).map(renderMemberCard).join('');

            section.classList.remove('dept-fade-out');
        }, 280);
    });
}

// ==================== PROKER SECTION UPDATER ====================
// Section "Program Kerja Divisi <Nama>" menampilkan 1 proker aktif dari
// salah satu departemen pada divisi yang sedang tampil di slider utama.
// Ada 2 lapis index: deptIndex (departemen ke-1 atau ke-2 dalam divisi)
// dan prokerIndex (proker ke-berapa dalam departemen tersebut).
// Pola animasinya sama seperti about-card & dept-section: fade-out -> 280ms -> ganti konten -> fade-in.

let currentDeptIndex = 0;
let currentProkerIndex = 0;
let prokerUpdateTimeout = null;

function getCurrentDepartment() {
    const div = divisions[currentIndex];
    if (!div || !div.about || !div.about.departments) return null;
    return div.about.departments[currentDeptIndex] || div.about.departments[0] || null;
}

function renderProkerThumb(thumbSrc, prokerIndex, isActive) {
    return `
        <button
            class="proker-thumb${isActive ? ' active' : ''}"
            type="button"
            data-proker-index="${prokerIndex}"
            aria-label="Lihat program kerja ke-${prokerIndex + 1}"
        >
            <img src="${thumbSrc}" alt="" onerror="this.src='assets/img/logo/Himtika.png'">
        </button>
    `;
}

function renderProkerCard(dept, prokerIndex) {
    const section = document.getElementById('prokerSection');
    if (!section || !dept) return;

    const proker = (dept.proker || [])[prokerIndex];
    if (!proker) return;

    const elDeptLabel = section.querySelector('.proker-dept-label');
    const elTitle     = section.querySelector('.proker-title');
    const elPic       = section.querySelector('.proker-pic');
    const elDesc      = section.querySelector('.proker-desc');
    const elMainImg   = section.querySelector('.proker-main-img');
    const elThumbs     = section.querySelector('.proker-thumbs');
    const elCounter   = section.querySelector('.proker-counter-current');
    const elCounterTotal = section.querySelector('.proker-counter-total');

    const total = (dept.proker || []).length;

    if (elDeptLabel) elDeptLabel.textContent = `Dept. ${dept.name}`;
    if (elTitle)     elTitle.textContent     = proker.title;
    if (elPic)       elPic.textContent       = `Penanggung Jawab: ${proker.pic}`;
    if (elDesc)       elDesc.textContent      = proker.desc;
    if (elMainImg) {
        elMainImg.src = proker.mainImg;
        elMainImg.onerror = function () { this.src = 'assets/img/logo/Himtika.png'; };
    }
    if (elThumbs) {
        // Thumbnail merepresentasikan proker LAIN dalam departemen ini,
        // bukan galeri foto milik proker yang sedang aktif.
        elThumbs.innerHTML = (dept.proker || [])
            .map((p, i) => renderProkerThumb(p.mainImg, i, i === prokerIndex))
            .join('');
    }
    if (elCounter)      elCounter.textContent      = prokerIndex + 1;
    if (elCounterTotal) elCounterTotal.textContent  = total;
}

function updateProkerSection(divIndex, deptIndex, prokerIndex) {
    const div = divisions[divIndex];
    if (!div || !div.about || !div.about.departments) return;

    const section = document.getElementById('prokerSection');
    if (!section) return;

    currentDeptIndex   = deptIndex;
    currentProkerIndex = prokerIndex;

    const dept = div.about.departments[deptIndex];

    const elDivisionName = section.querySelector('.proker-section-title-highlight');
    if (elDivisionName) elDivisionName.textContent = `Divisi ${div.name}`;

    section.classList.add('proker-fade-out');

    clearTimeout(prokerUpdateTimeout);
    prokerUpdateTimeout = setTimeout(() => {
        if (!dept || !dept.proker || dept.proker.length === 0) {
            section.style.display = 'none';
            return;
        }

        section.style.display = '';
        renderProkerCard(dept, prokerIndex);
        section.classList.remove('proker-fade-out');
    }, 280);
}

function goToProker(newIndex) {
    const dept = getCurrentDepartment();
    if (!dept || !dept.proker || dept.proker.length === 0) return;

    const total = dept.proker.length;
    const safeIndex = ((newIndex % total) + total) % total;
    updateProkerSection(currentIndex, currentDeptIndex, safeIndex);
}

// Navigation
document.addEventListener('DOMContentLoaded', () => {
    const prokerPrevBtn = document.getElementById('prokerPrevBtn');
    const prokerNextBtn = document.getElementById('prokerNextBtn');
    const prokerThumbs  = document.getElementById('prokerThumbs');

    if (prokerPrevBtn) prokerPrevBtn.addEventListener('click', () => {
        goToProker(currentProkerIndex - 1);
    });

    if (prokerNextBtn) prokerNextBtn.addEventListener('click', () => {
        goToProker(currentProkerIndex + 1);
    });

    if (prokerThumbs) prokerThumbs.addEventListener('click', (e) => {
        const btn = e.target.closest('.proker-thumb');
        if (!btn) return;
        const idx = parseInt(btn.dataset.prokerIndex, 10);
        if (!Number.isNaN(idx)) goToProker(idx);
    });

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (prevBtn) prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + divisions.length) % divisions.length;
        updateSlider();
    });

    if (nextBtn) nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % divisions.length;
        updateSlider();
    });

    buildSlider();
    buildDots();
    updateSlider();
});