(function($) {
    "use strict";

    // Preloader
    function handlePreloader() {
        if ($('.preloader').length) {
            $('body').addClass('page-loaded');
            $('.preloader').delay(1000).fadeOut(300);
        }
    }

    // Header lama tetap dipertahankan.
    function headerStyle() {
        if ($('.main-header').length) {
            var scrollY = $(window).scrollTop();
            var header = $('.main-header');

            if (scrollY <= 200) {
                header.removeClass('header-fixed').addClass('header-absolute');

                header.css({
                    transform: 'translateY(0)',
                    opacity: '1'
                });
            } else if (scrollY > 200 && scrollY <= 350) {
                header.css({
                    transform: 'translateY(-100px)',
                    opacity: '0'
                });
            } else {
                header
                    .addClass('header-fixed')
                    .removeClass('header-absolute');

                header.css({
                    transform: 'translateY(0)',
                    opacity: '1'
                });
            }
        }
    }

    $(window).on('scroll', function() {
        headerStyle();
    });

    headerStyle();

    // Submenu Dropdown Toggle
    if ($('.main-header li.dropdown ul').length) {
        $('.main-header .navigation li.dropdown').append(
            '<div class="dropdown-btn">' +
                '<span class="fa fa-angle-right"></span>' +
            '</div>'
        );
    }

    // Mobile Nav Hide Show
    if ($('.mobile-menu').length) {
        if (
            $.fn.mCustomScrollbar &&
            $('.mobile-menu .menu-box').length
        ) {
            $('.mobile-menu .menu-box').mCustomScrollbar();
        }

        var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();

        if (mobileMenuContent) {
            $('.mobile-menu .menu-box .menu-outer').append(
                mobileMenuContent
            );

            $('.sticky-header .main-menu').append(
                mobileMenuContent
            );
        }

        $('.mobile-menu').on(
            'click',
            'li.dropdown .dropdown-btn',
            function() {
                $(this).toggleClass('open');
                $(this).prev('ul').slideToggle(500);
            }
        );

        $('.mobile-nav-toggler').on('click', function() {
            $('body').addClass('mobile-menu-visible');
        });

        $('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on(
            'click',
            function() {
                $('body').removeClass('mobile-menu-visible');
            }
        );
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

    $('#backToTop').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate(
            {
                scrollTop: 0
            },
            800
        );
    });

    $(window).on('load', function() {
        handlePreloader();
    });
})(window.jQuery);


// =====================================================
// DATA DAN RENDERER STRUKTUR ORGANISASI
// =====================================================

const iconPlaceholderKahimWahim = 'assets/img/icon/kahim-wahim-gear.png';
const iconPlaceholderInternal = 'assets/img/icon/icon-internal.png';
const iconPlaceholderRelasi = 'assets/img/icon/icon-relasi.png';
const iconPlaceholderRnD = 'assets/img/icon/icon-rnd.png';
const iconPlaceholderEdukasi = 'assets/img/icon/icon-edukasi.png';
const iconPlaceholderInfokom = 'assets/img/icon/icon-infokom.png';

const organizationData = [
    {
        id: 'sc',
        type: 'sc',
        badge: 'SC',
        name: 'Steering Committee',
        shortName: 'Steering Committee',
        description: 'Pengarah dan pengawas organisasi',
        image: 'assets/img/divisi/steering.webp',
        memberCount: 6,

        leaders: [
            {
                title: 'Ketua Himpunan',

                description:
                    'Merupakan pengambil kebijakan tertinggi dalam HIMTIKA yang menjalankan fungsi kepemimpinan umum dan menjadi penanggung jawab pelaksanaan tugas serta program HIMTIKA, baik ke dalam maupun keluar.',

                roles: [
                    'Memimpin HIMTIKA',
                    'Menetapkan Kebijakan',
                    'Mengoordinasi pengurus',
                    'Bertanggungjawab kegiatan'
                ],

                photo: 'assets/img/pengurus/kahim.webp',
                icon: iconPlaceholderKahimWahim,
                name: 'M. Akmal Fauzan N. R.',
                nickname: 'Akmal',
                role: 'Ketua Himpunan'
            },
            {
                title: 'Wakil Ketua Himpunan',

                description:
                    'Merupakan penanggung jawab koordinator bidang data dan pustaka, ketatausahaan, penerangan, serta hubungan organisasi dengan pihak eksternal.',

                roles: [
                    'Mendampingi Kahim',
                    'Mengkoordinasi bidang',
                    'Menggantikan ketua',
                    'Mengawasi program'
                ],

                photo: 'assets/img/pengurus/wahim.webp',
                icon: iconPlaceholderKahimWahim,
                name: 'Indyra Putri Pratama',
                nickname: 'Indyra',
                role: 'Wakil Ketua Himpunan',
                mirrored: true,
                reverseGradient: true
            }
        ],

        secretary: {
            kicker: 'Administrasi',
            title: 'Sekretaris',

            description:
                'Merupakan penanggung jawab dan koordinator di bidang administrasi HIMTIKA.',

            roles: [
                'Mengoordinasikan administrasi kesekretariatan dan kearsipan',
                'Menyiapkan materi rapat dan dokumen organisasi',
                'Mencatat surat masuk, surat keluar, dan daftar hadir rapat pengurus',
                'Memelihara inventaris serta alat-alat kesekretariatan'
            ],

            members: [
                {
                    name: 'Alia Hamzah',
                    nickname: 'Alia',
                    role: 'Sekretaris Umum',
                    photo:
                        'assets/img/pengurus/sekum-alia.webp'
                },
                {
                    name: 'Nasya Putri Anjani',
                    nickname: 'Nasya',
                    role: 'Wakil Sekretaris Umum',
                    photo:
                        'assets/img/pengurus/wasekum-nasya.webp'
                }
            ]
        },

        treasurer: {
            kicker: 'Keuangan',
            title: 'Bendahara',

            description:
                'Merupakan penanggung jawab dan koordinator di bidang keuangan dan perlengkapan organisasi HIMTIKA.',

            roles: [
                'Bertanggung jawab atas penerimaan dan pengeluaran keuangan',
                'Mencatat dan melaporkan dana kemahasiswaan kepada Ketua Himpunan',
                'Mengelola pembukuan dan laporan keuangan',
                'Mengawasi dana kas bersama Ketua Himpunan'
            ],

            members: [
                {
                    name: 'Anisa Diyah Ayu Lestari',
                    nickname: 'Anisa',
                    role: 'Bendahara Umum',
                    photo:
                        'assets/img/pengurus/bendum-anisa.webp'
                },
                {
                    name: 'Luckyta Rizqia Jubaedi',
                    nickname: 'Lucky',
                    role: 'Wakil Bendahara Umum',
                    photo:
                        'assets/img/pengurus/wabendum-luckyta.webp'
                }
            ]
        }
    },

    {
        id: 'internal',
        type: 'division',
        badge: 'Divisi',
        name: 'Internal',
        shortName: 'Divisi Internal',
        description:
            'Penguatan organisasi internal',
        image: 'assets/img/divisi/internal.webp',
        memberCount: 9,

        divisionDescription:
            'Divisi Internal bertugas mengelola kaderisasi serta pengembangan sumber daya manusia di HIMTIKA. Divisi ini berperan dalam menjaga komunikasi yang harmonis antar pengurus serta mempersiapkan generasi Informatika yang lebih baik melalui kegiatan kaderisasi dan pengenalan kehidupan kampus bagi mahasiswa baru.',

        leader: {
            name: 'Ambar Triyasmin',
            nickname: 'yasmin',
            role: 'Ketua Divisi Internal',
            photo: 'assets/img/pengurus/kadiv-internal.webp',
            icon: iconPlaceholderInternal
        },

        departments: [
            {
                name: 'Human Resource Development',

                description:
                    'Meningkatkan motivasi, softskill, karakter, dan perkembangan kinerja pengurus HIMTIKA.',

                members: [
                    [
                        'Tantawi Shafa Saadilah Simatupang',
                        'Ketua Departemen HRD',
                        'kadept-internal-tantawi.webp',
                        'Tantawi'
                    ],
                    [
                        "An'Amatus Syafira Aulia Azahra",
                        'Anggota Dept. HRD',
                        'anggota-internal-azahra.webp',
                        'Aza'
                    ],
                    [
                        'Kaisya Almaidja',
                        'Anggota Dept. HRD',
                        'anggota-internal-kaisya.webp',
                        'Kaisya'
                    ],
                    [
                        'Ridho Mughni Nursila',
                        'Anggota Dept. HRD',
                        'anggota-internal-ridho.webp',
                        'Ridho'
                    ]
                ]
            },
            {
                name: 'HIMTIKA Care',

                description:
                    'Menjalankan pembinaan, penjagaan, evaluasi, dan kontrol organisasi dengan semangat empati serta kekeluargaan.',

                members: [
                    [
                        'Sri Dayanti',
                        'Ketua Departemen HIMTIKA Care',
                        'kadept-internal-sri.webp',
                        'Sri'
                    ],
                    [
                        'Aqilah Filzah Hidayat',
                        'Anggota Dept. HIMTIKA Care',
                        'anggota-internal-aqilah.webp',
                        'Aqilah'
                    ],
                    [
                        'Gibran Ferdiansyah',
                        'Anggota Dept. HIMTIKA Care',
                        'anggota-internal-gibran.webp',
                        'Gibran'
                    ],
                    [
                        'Kayla Dwi Septiani',
                        'Anggota Dept. HIMTIKA Care',
                        'anggota-internal-kayla.webp',
                        'Kayla'
                    ]
                ]
            }
        ],

        programs: [
            [
                'Human Resource Development',
                'Dies Natalis HIMTIKA',
                'Ridho Mughni Nursila',
                'Rangkaian acara untuk memperingati berdirinya HIMTIKA sekaligus mempererat silaturahmi keluarga besar HIMTIKA.',
                'internal-dies-natalis.webp'
            ],
            [
                'Human Resource Development',
                'IT Bootcamp: Independent Project',
                'An’Amatus Syafira Aulia Azahra',
                'Kegiatan pengenalan kehidupan kampus serta pengembangan hardskill, softskill, kepemimpinan, dan kekeluargaan mahasiswa baru Informatika.',
                'internal-it-bootcamp.webp'
            ],
            [
                'Human Resource Development',
                'LKMM Pra-Dasar',
                'Kaisya Almaidja',
                'Kegiatan pembekalan mahasiswa baru dalam komunikasi, pengenalan potensi diri, berpikir kritis, dan keterampilan dasar berorganisasi.',
                'internal-lkmmpd.webp'
            ],
            [
                'Human Resource Development',
                'Musyawarah Anggota',
                'Tantawi Shafa Saadilah Simatupang',
                'Forum musyawarah tertinggi anggota HIMTIKA untuk evaluasi, pertanggungjawaban, dan penetapan keputusan organisasi.',
                'internal-musang.webp'
            ],
            [
                'HIMTIKA Care',
                'HIMTIKA Organizing Agenda',
                'Kayla Dwi Septiani',
                'Program penguatan koordinasi, evaluasi, kebersamaan, dan keharmonisan seluruh pengurus HIMTIKA.',
                'internal-hoa.webp'
            ]
        ]
    },

    {
        id: 'relation',
        type: 'division',
        badge: 'Divisi',
        name: 'Relation',
        shortName: 'Divisi Relation',
        description: 'Relasi dan kemitraan eksternal',
        image: 'assets/img/divisi/relasi.webp',
        memberCount: 8,

        divisionDescription:
            'Divisi Relation bertanggung jawab membangun dan memelihara hubungan kerja sama dengan instansi, organisasi, maupun perusahaan di luar kampus. Selain itu, divisi ini juga berperan dalam kegiatan pendanaan serta menjalin kolaborasi untuk mendukung kegiatan dan perkembangan HIMTIKA.',

        leader: {
            name: 'Rois Alif Pradipa',
            nickname: 'Rois',
            role: 'Ketua Divisi Relation',
            photo: 'assets/img/pengurus/kadiv-relasi.webp',
            icon: iconPlaceholderRelasi
        },

        departments: [
            {
                name: 'Public Marketing',

                description:
                    'Mengembangkan tools marketing dan sumber dana potensial melalui kreativitas serta inisiatif bidang teknologi informasi.',

                members: [
                    [
                        'Valen Jason',
                        'Ketua Departemen Public Marketing',
                        'kadept-relasi-jason.webp',
                        'Jason'
                    ],
                    [
                        'Julian Manasye Nasyok',
                        'Anggota Dept. Public Marketing',
                        'anggota-relasi-julian.webp',
                        'Julian'
                    ],
                    [
                        'Marssello Hotasi Marpaung',
                        'Anggota Dept. Public Marketing',
                        'anggota-relasi-marcello.webp',
                        'sello'
                    ]
                ]
            },
            {
                name: 'Public Relation',

                description:
                    'Memperluas serta menjaga hubungan baik dengan himpunan, instansi, dan mahasiswa melalui komunikasi agenda HIMTIKA.',

                members: [
                    [
                        'Ihsan Fauzi Akbar',
                        'Ketua Departemen Public Relation',
                        'kadept-relasi-ihsan.webp',
                        'Ihsan'
                    ],
                    [
                        'Al Fazran Dwi Nugraha',
                        'Anggota Dept. Public Relation',
                        'anggota-relasi-fazran.webp',
                        'Fazran'
                    ],
                    [
                        'Fadhil Azhar Putra',
                        'Anggota Dept. Public Relation',
                        'anggota-relasi-ajay.webp',
                        'Ajay'
                    ],
                    [
                        'Raffa Hafizh Hauzaan',
                        'Anggota Dept. Public Relation',
                        'anggota-relasi-raffa.webp',
                        'Raffa'
                    ]
                ]
            }
        ],

        programs: [
            [
                'Public Marketing',
                'Corporation',
                'Marsello Hotasi Marpaung',
                'Program kewirausahaan dan pengembangan sumber pemasukan HIMTIKA melalui produk serta aktivitas pemasaran.',
                'relasi-corporation.webp'
            ],
            [
                'Public Relation',
                'HI-Link',
                'Ihsan Fauzi Akbar',
                'Program penghubung HIMTIKA dengan pihak eksternal melalui kunjungan, kolaborasi, dan pertukaran wawasan.',
                'relasi-hi-link.webp'
            ],
            [
                'Public Relation',
                'Kemitraan',
                'Al Fazran Dwi Nugraha',
                'Program untuk membangun, mengelola, dan menjaga kerja sama strategis HIMTIKA dengan mitra eksternal.',
                'relasi-kemitraan.webp'
            ]
        ]
    },

    {
        id: 'rnd',
        type: 'division',
        badge: 'Divisi',
        name: 'RnD',
        shortName: 'Divisi RnD',
        description: 'Inovasi dan pengembangan teknologi',
        image: 'assets/img/divisi/rnd.webp',
        memberCount: 8,

        divisionDescription:
            'Divisi Research and Development (RnD) merupakan divisi yang menjadi ujung tombak dalam  penerapan teknologi informasi. Divisi ini fokus pada peningkatan kualitas di lingkungan  HIMTIKA dan program studi Informatika UNSIKA. Selain itu, RnD juga berperan sebagai IT Support untuk mendukung optimalisasi kinerja HIMTIKA.',

        leader: {
            name: 'Raika Maulana Dwi Putra',
            nickname: 'Raika',
            role: 'Ketua Divisi RnD',
            photo: 'assets/img/pengurus/kadiv-rnd.webp',
            icon: iconPlaceholderRnD
        },

        departments: [
            {
                name: 'Research Development',

                description:
                    'Mengumpulkan ide dan inovasi, mengidentifikasi kebutuhan serta masalah produk digital, dan mengawal pengembangan sampai tahap rilis.',

                members: [
                    [
                        'Muhammad Rafisyah Rizkiyawan',
                        'Ketua Departemen Research Development',
                        'kadept-rnd-rafisyah.webp',
                        'Rafisyah'
                    ],
                    [
                        'Mohammed Ali Irsyad Ginting',
                        'Anggota Dept. Research Development',
                        'anggota-rnd-irsyad.webp',
                        'Irsyad'
                    ],
                    [
                        'Nanang Saepudin',
                        'Anggota Dept. Research Development',
                        'anggota-rnd-nanang.webp',
                        'Nanang'
                    ]
                ]
            },
            {
                name: 'Product Development',

                description:
                    'Membuat, mengembangkan, mengelola, dan menjadi IT Support produk digital HIMTIKA.',

                members: [
                    [
                        'Rafli Rizqi Fadillah',
                        'Ketua Departemen Product Development',
                        'kadept-rnd-rafli.webp',
                        'Rafli'
                    ],
                    [
                        'Arsya Awfazahran',
                        'Anggota Dept. Product Development',
                        'anggota-rnd-arsya.webp',
                        'Arsya'
                    ],
                    [
                        'Azka Barra Haidar',
                        'Anggota Dept. Product Development',
                        'anggota-rnd-azka.webp',
                        'Azka'
                    ],
                    [
                        'Fajar Abdilah',
                        'Anggota Dept. Product Development',
                        'anggota-rnd-fajar.webp',
                        'Fajar'
                    ]
                ]
            }
        ],

        programs: [
            [
                'Product Development',
                'HIMTIKA Software Development',
                'Fajar Abdilah',
                'Program pengembangan dan pengelolaan produk digital resmi HIMTIKA untuk menunjang kebutuhan informasi serta layanan organisasi.',
                'rnd-himtika-software-development.webp'
            ],
            [
                'Research Development',
                'Software House',
                'Nanang Saepudin',
                'Program penelitian dan pengembangan produk digital HIMTIKA berupa website maupun aplikasi mobile berdasarkan ide dan kebutuhan mahasiswa Informatika.',
                'rnd-software-house.webp'
            ]
        ]
    },

    {
        id: 'education',
        type: 'division',
        badge: 'Divisi',
        name: 'Education',
        shortName: 'Divisi Education',
        description: 'Pengembangan akademik dan prestasi mahasiswa',
        image: 'assets/img/divisi/edukasi.webp',
        memberCount: 6,

        divisionDescription:
            'Divisi Education berfungsi sebagai wadah bagi mahasiswa Informatika untuk mengembangkan keterampilan dan wawasan di bidang akademik maupun teknologi informasi. Divisi ini juga mendorong prestasi mahasiswa melalui pelatihan, kegiatan akademik, serta penyebaran informasi perlombaan di bidang IT.',

        leader: {
            name: 'Rifqy Kurniawan Fattahillah',
            nickname: 'Rifqy',
            role: 'Ketua Divisi Education',
            photo: 'assets/img/pengurus/kadiv-edukasi.webp',
            icon: iconPlaceholderEdukasi
        },

        departments: [
            {
                name: 'Skill Education',

                description:
                    'Memfasilitasi minat, bakat, karya, dan kesiapan mahasiswa dalam mengikuti perlombaan bidang IT.',

                members: [
                    [
                        'Fitria',
                        'Ketua Departemen Skill Education',
                        'kadept-edukasi-fitria.webp',
                        'Fitria'
                    ],
                    [
                        'Aditya Akwinda',
                        'Anggota Dept. Skill Education',
                        'anggota-edukasi-aditya.webp',
                        'Adit'
                    ],
                    [
                        'Ahmad Haikal',
                        'Anggota Dept. Skill Education',
                        'anggota-edukasi-haikal.webp',
                        'Haikal'
                    ]
                ]
            },
            {
                name: 'College Education',

                description:
                    'Meningkatkan keahlian dan pemahaman keilmuan IT melalui kelas belajar serta pengayaan materi perkuliahan.',

                members: [
                    [
                        'Amelia Marliana',
                        'Ketua Departemen College Education',
                        'kadept-edukasi-amelia.webp',
                        'Amel'
                    ],
                    [
                        'Andika Bagas Febrian',
                        'Anggota Dept. College Education',
                        'anggota-edukasi-andika.webp',
                        'Bagas'
                    ]
                ]
            }
        ],

        programs: [
            [
                'Skill Education',
                'Create and Compete',
                'Ahmad Haikal',
                'Program untuk mendorong mahasiswa menciptakan karya, mengembangkan kemampuan, dan mempersiapkan diri mengikuti kompetisi bidang IT.',
                'edukasi-cnc.webp'
            ],
            [
                'Skill Education',
                'Pekan IT',
                'Fitria',
                'Rangkaian kegiatan kompetisi dan edukasi teknologi yang menjadi wadah aktualisasi kemampuan mahasiswa di bidang informatika.',
                'edukasi-pekan-it.webp'
            ],
            [
                'College Education',
                'Study Club',
                'Amelia Marliana',
                'Kelas belajar yang membantu mahasiswa Informatika memahami materi perkuliahan dan meningkatkan kemampuan akademik.',
                'edukasi-study-club.webp'
            ]
        ]
    },

    {
        id: 'infokom',
        type: 'division',
        badge: 'Divisi',
        name: 'InfoCom',
        shortName: 'Divisi InfoCom',
        description: 'Media dan informasi digital',
        image: 'assets/img/divisi/infokom.webp',
        memberCount: 8,

        divisionDescription:
            'Divisi Information and Communication (InfoCom) bertanggung jawab dalam mengelola seluruh  informasi dari internal HIMTIKA. Informasi tersebut kemudian disampaikan melalui  platform media sosial HIMTIKA agar dapat diakses oleh mahasiswa Informatika',

        leader: {
            name: 'Atika Sari Ramadhani',
            nickname: 'Atika',
            role: 'Ketua Divisi InfoCom',
            photo: 'assets/img/pengurus/kadiv-infokom.webp',
            icon: iconPlaceholderInfokom
        },

        departments: [
            {
                name: 'Media Information',

                description:
                    'Mengelola publikasi kegiatan, media sosial, branding digital, dan perancangan konten HIMTIKA.',

                members: [
                    [
                        'Afif Ghazanfar',
                        'Ketua Departemen Media Information',
                        'kadept-infokom-afif.webp',
                        'Afif'
                    ],
                    [
                        'Muhammad Fajar Ramadhan',
                        'Anggota Dept. Media Information',
                        'anggota-infokom-fajaw.webp',
                        'Fajaw'
                    ],
                    [
                        'Wisnu Tahta Agung Prayoga',
                        'Anggota Dept. Media Information',
                        'anggota-infokom-wisnu.webp',
                        'Wisnu'
                    ]
                ]
            },
            {
                name: 'Media Creative',

                description:
                    'Mengembangkan media informasi sesuai identitas visual HIMTIKA serta memproduksi konten desain dan video.',

                members: [
                    [
                        'Stefanie Roria Bintang',
                        'Ketua Departemen Media Creative',
                        'kadept-infokom-stefanie.webp',
                        'Bintang'
                    ],
                    [
                        'Rizky Yoga Salasa',
                        'Anggota Dept. Media Creative',
                        'anggota-infokom-yoga.webp',
                        'Yoga'
                    ],
                    [
                        'Rizky Fitri Putri Awaliyah',
                        'Anggota Dept. Media Creative',
                        'anggota-infokom-pipit.webp',
                        'Pipit'
                    ],
                    [
                        'Taqi Hamizan',
                        'Anggota Dept. Media Creative',
                        'anggota-infokom-taqi.webp',
                        'Taqi'
                    ]
                ]
            }
        ],

        programs: [
            [
                'Media Information',
                'Always On',
                'Muhammad Fajar Ramadhan',
                'Program publikasi informasi kegiatan dan agenda HIMTIKA secara aktif, konsisten, dan tepat waktu melalui media digital.',
                'infokom-always-on.webp'
            ],
            [
                'Media Information',
                'Content Writer',
                'Wisnu Tahta Agung Prayoga',
                'Program perencanaan serta penulisan konten informatif untuk kebutuhan publikasi dan komunikasi HIMTIKA.',
                'infokom-content-writer.webp'
            ],
            [
                'Media Creative',
                'Desain Komunikasi Visual',
                'Rizky Fitri Putri Awaliyah',
                'Program pengembangan identitas visual dan produksi desain komunikasi untuk mendukung publikasi HIMTIKA.',
                'infokom-dkv.webp'
            ]
        ]
    }
];

// =====================================================
// NORMALISASI DATA
// =====================================================

organizationData.forEach(function(item) {
    if (item.departments) {
        item.departments.forEach(function(department) {
            department.members = department.members.map(
                function(member) {
                    return {
                        name: member[0],
                        role: member[1],
                        photo:
                            'assets/img/pengurus/' + member[2],
                        nickname: member[3] || null
                    };
                }
            );
        });
    }

    if (item.programs) {
        item.programs = item.programs.map(function(program) {
            return {
                department: program[0],
                title: program[1],
                pic: program[2],
                description: program[3],
                image:
                    'assets/img/proker/' + program[4],

                // Isi link masing-masing program kerja di sini.
                href: ''
            };
        });
    }
});

// ==================== DIVISION SLIDER ====================
// const divisions = [
//     {
//         name: "Steering Committee",
//         desc: "Pengarah dan pengawas organisasi",
//         img: "assets/img/divisi/steering.png",
//         count: 6,
//         about: {
//             title: "Ketua Himpunan",
//             description: "Steering Committee merupakan badan pengarah tertinggi dalam HIMTIKA yang bertanggung jawab dalam menetapkan arah kebijakan strategis organisasi. SC bertugas mengawasi jalannya program kerja seluruh divisi dan memastikan setiap keputusan besar organisasi selaras dengan visi dan misi HIMTIKA.",
//             bgIcon: "assets/img/icon/icon_sc.png",
//             departments: [
//                 {
//                     name: "Pengawasan Kebijakan",
//                     desc: "Mengawasi pelaksanaan kebijakan strategis serta memastikan setiap program kerja divisi berjalan sesuai arah dan tujuan organisasi.",
//                     members: [
//                         { photo: "assets/img/anggota/sc/1.png", firstName: "Nama", lastName: "Ketua Dept", role: "Ketua Dept Pengawasan", highlight: "Nama" },
//                         { photo: "assets/img/anggota/sc/2.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Pengawasan", highlight: "Nama" }
//                     ],
//                     proker: [
//                         {
//                             title: "Monitoring Kinerja Divisi",
//                             pic: "Nama Penanggung Jawab",
//                             desc: "Program kerja yang berfokus pada pemantauan rutin terhadap progres dan kinerja setiap divisi, memastikan seluruh program berjalan sesuai timeline dan target yang telah ditetapkan.",
//                             mainImg: "assets/img/proker/sc/monitoring_main.png",
//                             thumbs: ["assets/img/proker/sc/monitoring_1.png", "assets/img/proker/sc/monitoring_2.png", "assets/img/proker/sc/monitoring_3.png"]
//                         },
//                         {
//                             title: "Audit Kebijakan Organisasi",
//                             pic: "Nama Penanggung Jawab",
//                             desc: "Melakukan audit berkala terhadap kebijakan yang berlaku di HIMTIKA untuk memastikan relevansi dan efektivitasnya terhadap kebutuhan organisasi saat ini.",
//                             mainImg: "assets/img/proker/sc/audit_main.png",
//                             thumbs: ["assets/img/proker/sc/audit_1.png", "assets/img/proker/sc/audit_2.png"]
//                         }
//                     ]
//                 },
//                 {
//                     name: "Evaluasi Strategis",
//                     desc: "Melakukan evaluasi berkala terhadap kinerja organisasi serta merumuskan rekomendasi perbaikan untuk pengembangan HIMTIKA kedepannya.",
//                     members: [
//                         { photo: "assets/img/anggota/sc/3.png", firstName: "Nama", lastName: "Ketua Dept", role: "Ketua Dept Evaluasi", highlight: "Nama" },
//                         { photo: "assets/img/anggota/sc/4.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Evaluasi", highlight: "Nama" }
//                     ],
//                     proker: [
//                         {
//                             title: "Evaluasi Akhir Kepengurusan",
//                             pic: "Nama Penanggung Jawab",
//                             desc: "Menyusun laporan evaluasi menyeluruh terhadap capaian seluruh divisi di akhir periode kepengurusan sebagai dasar perbaikan periode berikutnya.",
//                             mainImg: "assets/img/proker/sc/evaluasi_main.png",
//                             thumbs: ["assets/img/proker/sc/evaluasi_1.png", "assets/img/proker/sc/evaluasi_2.png"]
//                         }
//                     ]
//                 }
//             ],
//             kadiv: {
//                 photo: "assets/img/divisi/kahim.png",
//                 firstName: "Nama",
//                 lastName: "Ketua SC",
//                 role: "Ketua Steering Committee",
//                 scale: 0.999,
//                 posY: "5%"
//             },
//             wakil: {
//                 title: "Wakil Ketua",
//                 description: "Merupakan penanggung jawab koordinator bidang. Bidang data dan pustaka, ketatausahaan dan penerangan serta hubungan organisasi dengan pihak eksternal organisasi.",
//                 peranLabel: "Peran Wakil Ketua Himpunan yaitu:",
//                 peran: [
//                     { highlight: "Mendampingi", text: "Kahim" },
//                     { highlight: "Menggantikan", text: "ketua" },
//                     { highlight: "Mengkoordinasi", text: "bidang" },
//                     { highlight: "Mengawasi", text: "program" }
//                 ],
//                 photo: "assets/img/divisi/wakil_ketua.png",
//                 firstName: "Indyra",
//                 lastName: "Putri Pratama",
//                 role: "Wakil Ketua Himpunan",
//                 scale: 1.15,
//                 posY: "5%"
//             },
//             sekretaris: {
//                 label: "Administrasi",
//                 title: "Sekretaris",
//                 description: "Merupakan penanggung jawab dan koordinator di bidang administrasi HIMTIKA.",
//                 peranLabel: "Peran Sekretaris yaitu:",
//                 peran: [
//                     { highlight: "Memimpin", text: "HIMTIKA" },
//                     { highlight: "Mengkoordinasi", text: "kesekretariatan" },
//                     { highlight: "Menetapkan", text: "kebijakan" },
//                     { highlight: "Bertanggung jawab", text: "administrasi" }
//                 ],
//                 members: [
//                     { photo: "assets/img/anggota/sc/5.png", firstName: "Nama", lastName: "Sekretaris Umum", role: "Sekretaris Umum HIMTIKA", highlight: "Nama" },
//                     { photo: "assets/img/anggota/sc/6.png", firstName: "Nama", lastName: "Wakil Sekretaris", role: "Wakil Sekretaris Umum", highlight: "Nama" }
//                 ]
//             },
//             bendahara: {
//                 label: "Keuangan",
//                 title: "Bendahara",
//                 description: "Merupakan penanggung jawab dan koordinator di bidang keuangan HIMTIKA.",
//                 peranLabel: "Peran Bendahara yaitu:",
//                 peran: [
//                     { highlight: "Memimpin", text: "HIMTIKA" },
//                     { highlight: "Mengkoordinasi", text: "pengurus" },
//                     { highlight: "Menetapkan", text: "kebijakan" },
//                     { highlight: "Bertanggung jawab", text: "kegiatan" }
//                 ],
//                 members: [
//                     { photo: "assets/img/anggota/sc/7.png", firstName: "Nama", lastName: "Bendahara Umum", role: "Bendahara Umum HIMTIKA", highlight: "Nama" },
//                     { photo: "assets/img/anggota/sc/8.png", firstName: "Nama", lastName: "Wakil Bendahara", role: "Wakil Bendahara Umum", highlight: "Nama" }
//                 ]
//             }
//         }
//     },
//     {
//         name: "RnD",
//         desc: "Inovasi dan pengembangan teknologi",
//         img: "assets/img/divisi/rnd.png",
//         count: 8,
//         about: {
//             title: "Divisi RnD",
//             description: "Divisi Research and Development (RnD) merupakan divisi yang menjadi ujung tombak dalam penerapan teknologi informasi. Divisi ini fokus pada peningkatan kualitas di lingkungan HIMTIKA dan program studi Informatika UNSIKA. Selain itu, RnD juga berperan sebagai IT Support untuk mendukung optimalisasi kinerja HIMTIKA.",
//             bgIcon: "assets/img/icon/icon_rnd.png",
//             departments: [
//                 {
//                     name: "Research Development",
//                     desc: "Mengembangkan ide, melakukan riset, serta merancang inovasi dan solusi untuk pengembangan produk maupun layanan.",
//                     members: [
//                         { photo: "assets/img/divisi/kadiv_rnd.png", firstName: "Raika", lastName: "Maulana Dwi Putra", role: "Ketua Divisi RnD", highlight: "Raika" },
//                         { photo: "assets/img/anggota/rnd/rafisyah.png", firstName: "M", lastName: "Rafisyah Rizkiyawan", role: "Ketua Dept Research", highlight: "Rafisyah" },
//                         { photo: "assets/img/anggota/rnd/rafli.png", firstName: "Rafli", lastName: "Rizqi Fadillah", role: "Ketua Dept Product", highlight: "Rafli" },
//                         { photo: "assets/img/anggota/rnd/ali.png", firstName: "Mohammed Ali", lastName: "Irsyad Ginting", role: "Anggota Dept Research", highlight: "Irsyad" }
//                     ],
//                     proker: [
//                         {
//                             title: "Software House",
//                             pic: "Nanang Saepudin",
//                             desc: "Software House adalah program kerja yang berfokus pada penelitian dan pengembangan produk digital HIMTIKA berupa website dan aplikasi mobile. Program ini menjadi wadah bagi mahasiswa Informatika untuk menyampaikan ide atau kebutuhan yang kemudian dianalisis dan dikembangkan bersama HIMTIKA Software Development menjadi produk digital yang bermanfaat.",
//                             mainImg: "assets/img/proker/rnd/software_house_main.png",
//                             thumbs: [
//                                 "assets/img/proker/rnd/software_house_1.png",
//                                 "assets/img/proker/rnd/software_house_2.png",
//                                 "assets/img/proker/rnd/software_house_3.png"
//                             ]
//                         },
//                         {
//                             title: "IT Support",
//                             pic: "Nama Penanggung Jawab",
//                             desc: "Menyediakan dukungan teknis kepada seluruh divisi HIMTIKA terkait perangkat, jaringan, dan sistem digital agar kegiatan organisasi berjalan lancar tanpa kendala teknis.",
//                             mainImg: "assets/img/proker/rnd/it_support_main.png",
//                             thumbs: ["assets/img/proker/rnd/it_support_1.png", "assets/img/proker/rnd/it_support_2.png"]
//                         },
//                         {
//                             title: "Riset Teknologi Terapan",
//                             pic: "Nama Penanggung Jawab",
//                             desc: "Melakukan riset mengenai tren dan kebutuhan teknologi terapan yang relevan untuk diterapkan dalam lingkungan HIMTIKA dan program studi Informatika.",
//                             mainImg: "assets/img/proker/rnd/riset_main.png",
//                             thumbs: ["assets/img/proker/rnd/riset_1.png", "assets/img/proker/rnd/riset_2.png", "assets/img/proker/rnd/riset_3.png"]
//                         }
//                     ]
//                 },
//                 {
//                     name: "Product Development",
//                     desc: "Merancang, membangun, dan menyempurnakan produk digital HIMTIKA mulai dari konsep hingga implementasi yang siap digunakan.",
//                     members: [
//                         { photo: "assets/img/divisi/rnd_card.png", firstName: "Nama", lastName: "Ketua Dept", role: "Ketua Dept Product", highlight: "Nama" },
//                         { photo: "assets/img/divisi/rnd_card.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Product", highlight: "Nama" },
//                         { photo: "assets/img/divisi/rnd_card.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Product", highlight: "Nama" },
//                         { photo: "assets/img/divisi/rnd_card.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Product", highlight: "Nama" }
//                     ],
//                     proker: [
//                         {
//                             title: "UI/UX Design Sprint",
//                             pic: "Nama Penanggung Jawab",
//                             desc: "Merancang antarmuka dan pengalaman pengguna untuk seluruh produk digital HIMTIKA melalui proses design sprint yang terstruktur dan kolaboratif.",
//                             mainImg: "assets/img/proker/rnd/uiux_main.png",
//                             thumbs: ["assets/img/proker/rnd/uiux_1.png", "assets/img/proker/rnd/uiux_2.png"]
//                         },
//                         {
//                             title: "Maintenance & Update Sistem",
//                             pic: "Nama Penanggung Jawab",
//                             desc: "Melakukan pemeliharaan rutin dan pembaruan berkala pada produk digital HIMTIKA yang telah diluncurkan agar tetap optimal dan aman digunakan.",
//                             mainImg: "assets/img/proker/rnd/maintenance_main.png",
//                             thumbs: ["assets/img/proker/rnd/maintenance_1.png", "assets/img/proker/rnd/maintenance_2.png"]
//                         }
//                     ]
//                 }
//             ],
//             kadiv: {
//                 photo: "assets/img/divisi/kadiv_rnd.png",
//                 firstName: "Raika",
//                 lastName: "Maulana Dwi Putra",
//                 role: "Ketua Divisi RnD",
//                 scale: 1.35,
//                 posY: "0%"
//             }
//         }
//     },
//     {
//         name: "Infokom",
//         desc: "Media dan informasi digital",
//         img: "assets/img/divisi/infokom.png",
//         count: 7,
//         about: {
//             title: "Divisi Infokom",
//             description: "Divisi Informasi dan Komunikasi (Infokom) bertanggung jawab dalam mengelola seluruh media komunikasi HIMTIKA kepada publik dan anggota. Divisi ini memastikan setiap informasi tersampaikan secara efektif, kreatif, dan tepat sasaran melalui berbagai platform digital.",
//             bgIcon: "assets/img/icon/icon_infokom.png",
//             departments: [
//                 {
//                     name: "Media Sosial & Konten",
//                     desc: "Mengelola konten dan strategi media sosial HIMTIKA agar setiap informasi tersampaikan secara kreatif dan menarik.",
//                     members: [
//                         { photo: "assets/img/anggota/infokom/1.png", firstName: "Nama", lastName: "Ketua Dept", role: "Ketua Dept Media Sosial", highlight: "Nama" },
//                         { photo: "assets/img/anggota/infokom/2.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Media Sosial", highlight: "Nama" },
//                         { photo: "assets/img/anggota/infokom/3.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Media Sosial", highlight: "Nama" }
//                     ],
//                     proker: [
//                         {
//                             title: "Konten Kreatif HIMTIKA",
//                             pic: "Nama Penanggung Jawab",
//                             desc: "Memproduksi konten kreatif secara berkala untuk media sosial HIMTIKA guna meningkatkan engagement dan menyampaikan informasi secara menarik kepada anggota dan publik.",
//                             mainImg: "assets/img/proker/infokom/konten_main.png",
//                             thumbs: ["assets/img/proker/infokom/konten_1.png", "assets/img/proker/infokom/konten_2.png", "assets/img/proker/infokom/konten_3.png"]
//                         },
//                         {
//                             title: "Live Report & Takeover",
//                             pic: "Nama Penanggung Jawab",
//                             desc: "Menyajikan laporan langsung melalui media sosial pada setiap kegiatan besar HIMTIKA agar seluruh anggota dapat mengikuti perkembangan acara secara real-time.",
//                             mainImg: "assets/img/proker/infokom/livereport_main.png",
//                             thumbs: ["assets/img/proker/infokom/livereport_1.png", "assets/img/proker/infokom/livereport_2.png"]
//                         }
//                     ]
//                 },
//                 {
//                     name: "Jurnalistik & Dokumentasi",
//                     desc: "Mendokumentasikan setiap kegiatan HIMTIKA serta menyusun liputan dan publikasi yang informatif bagi seluruh anggota.",
//                     members: [
//                         { photo: "assets/img/anggota/infokom/4.png", firstName: "Nama", lastName: "Ketua Dept", role: "Ketua Dept Jurnalistik", highlight: "Nama" },
//                         { photo: "assets/img/anggota/infokom/5.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Jurnalistik", highlight: "Nama" }
//                     ],
//                     proker: [
//                         {
//                             title: "Dokumentasi Kegiatan HIMTIKA",
//                             pic: "Nama Penanggung Jawab",
//                             desc: "Mengabadikan setiap momen kegiatan HIMTIKA dalam bentuk foto dan video sebagai arsip organisasi dan bahan publikasi media sosial.",
//                             mainImg: "assets/img/proker/infokom/dokumentasi_main.png",
//                             thumbs: ["assets/img/proker/infokom/dokumentasi_1.png", "assets/img/proker/infokom/dokumentasi_2.png"]
//                         }
//                     ]
//                 }
//             ],
//             kadiv: {
//                 photo: "assets/img/divisi/kadiv_infokom.png",
//                 firstName: "Nama",
//                 lastName: "Ketua Infokom",
//                 role: "Ketua Divisi Infokom",
//                 scale: 1.1,
//                 posY: "0%"
//             }
//         }
//     },
//     {
//         name: "Internal",
//         desc: "Manajemen dan koordinasi internal",
//         img: "assets/img/divisi/internal.png",
//         count: 5,
//         about: {
//             title: "Divisi Internal",
//             description: "Divisi Internal berperan sebagai tulang punggung keorganisasian HIMTIKA. Divisi ini mengelola administrasi, keuangan, serta kesejahteraan seluruh anggota HIMTIKA agar iklim organisasi tetap kondusif, solid, dan berkelanjutan.",
//             bgIcon: "assets/img/icon/icon_internal.png",
//             departments: [
//                 {
//                     name: "Administrasi & Kesekretariatan",
//                     desc: "Mengelola seluruh kebutuhan administrasi dan kesekretariatan agar tata kelola organisasi tetap rapi dan terstruktur.",
//                     members: [
//                         { photo: "assets/img/anggota/internal/1.png", firstName: "Nama", lastName: "Ketua Dept", role: "Ketua Dept Administrasi", highlight: "Nama" },
//                         { photo: "assets/img/anggota/internal/2.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Administrasi", highlight: "Nama" }
//                     ],
//                     proker: [
//                         {
//                             title: "Pengarsipan Surat & Dokumen",
//                             pic: "Nama Penanggung Jawab",
//                             desc: "Mengelola dan mengarsipkan seluruh surat masuk, surat keluar, serta dokumen penting organisasi secara rapi dan terstruktur untuk memudahkan akses di kemudian hari.",
//                             mainImg: "assets/img/proker/internal/arsip_main.png",
//                             thumbs: ["assets/img/proker/internal/arsip_1.png", "assets/img/proker/internal/arsip_2.png"]
//                         }
//                     ]
//                 },
//                 {
//                     name: "Keuangan & Bendahara",
//                     desc: "Mengelola keuangan organisasi secara transparan dan akuntabel untuk mendukung seluruh program kerja HIMTIKA.",
//                     members: [
//                         { photo: "assets/img/anggota/internal/3.png", firstName: "Nama", lastName: "Ketua Dept", role: "Ketua Dept Keuangan", highlight: "Nama" },
//                         { photo: "assets/img/anggota/internal/4.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Keuangan", highlight: "Nama" }
//                     ],
//                     proker: [
//                         {
//                             title: "Laporan Keuangan Berkala",
//                             pic: "Nama Penanggung Jawab",
//                             desc: "Menyusun dan mempublikasikan laporan keuangan organisasi secara berkala sebagai bentuk transparansi kepada seluruh anggota HIMTIKA.",
//                             mainImg: "assets/img/proker/internal/laporan_main.png",
//                             thumbs: ["assets/img/proker/internal/laporan_1.png", "assets/img/proker/internal/laporan_2.png"]
//                         },
//                         {
//                             title: "Penggalangan Dana Mandiri",
//                             pic: "Nama Penanggung Jawab",
//                             desc: "Menjalankan inisiatif penggalangan dana mandiri melalui kewirausahaan kecil untuk mendukung kas organisasi secara berkelanjutan.",
//                             mainImg: "assets/img/proker/internal/danamandiri_main.png",
//                             thumbs: ["assets/img/proker/internal/danamandiri_1.png", "assets/img/proker/internal/danamandiri_2.png"]
//                         }
//                     ]
//                 }
//             ],
//             kadiv: {
//                 photo: "assets/img/divisi/kadiv_internal.png",
//                 firstName: "Nama",
//                 lastName: "Ketua Internal",
//                 role: "Ketua Divisi Internal",
//                 scale: 1.15,
//                 posY: "5%"
//             }
//         }
//     },
//     {
//         name: "Relasi",
//         desc: "Kerjasama dan hubungan eksternal",
//         img: "assets/img/divisi/relasi.png",
//         count: 6,
//         about: {
//             title: "Divisi Relasi",
//             description: "Divisi Relasi menjalin dan mengembangkan kerjasama strategis antara HIMTIKA dengan berbagai pihak eksternal, mulai dari perusahaan, institusi pendidikan, komunitas teknologi, hingga organisasi mahasiswa lainnya. Divisi ini membuka peluang kolaborasi yang bermanfaat bagi seluruh anggota.",
//             bgIcon: "assets/img/icon/icon_relasi.png",
//             departments: [
//                 {
//                     name: "Hubungan Eksternal",
//                     desc: "Menjalin komunikasi dan kerjasama dengan pihak eksternal untuk membuka peluang kolaborasi bagi HIMTIKA.",
//                     members: [
//                         { photo: "assets/img/anggota/relasi/1.png", firstName: "Nama", lastName: "Ketua Dept", role: "Ketua Dept Hubungan Eksternal", highlight: "Nama" },
//                         { photo: "assets/img/anggota/relasi/2.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Hubungan Eksternal", highlight: "Nama" },
//                         { photo: "assets/img/anggota/relasi/3.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Hubungan Eksternal", highlight: "Nama" },
//                         { photo: "assets/img/anggota/relasi/4.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Hubungan Eksternal", highlight: "Nama" }
//                     ],
//                     proker: [
//                         {
//                             title: "Kunjungan Studi Banding",
//                             pic: "Nama Penanggung Jawab",
//                             desc: "Mengadakan kunjungan studi banding ke himpunan mahasiswa Informatika di kampus lain untuk bertukar wawasan dan memperluas jejaring organisasi.",
//                             mainImg: "assets/img/proker/relasi/studibanding_main.png",
//                             thumbs: ["assets/img/proker/relasi/studibanding_1.png", "assets/img/proker/relasi/studibanding_2.png"]
//                         },
//                         {
//                             title: "Kerjasama Antar Himpunan",
//                             pic: "Nama Penanggung Jawab",
//                             desc: "Membangun hubungan kerjasama jangka panjang dengan himpunan mahasiswa Informatika dari berbagai universitas untuk kegiatan kolaboratif.",
//                             mainImg: "assets/img/proker/relasi/kerjasama_main.png",
//                             thumbs: ["assets/img/proker/relasi/kerjasama_1.png", "assets/img/proker/relasi/kerjasama_2.png"]
//                         },
//                         {
//                             title: "Roadshow Industri",
//                             pic: "Nama Penanggung Jawab",
//                             desc: "Mengunjungi perusahaan teknologi untuk membangun relasi dan membuka peluang magang maupun kerjasama bagi anggota HIMTIKA.",
//                             mainImg: "assets/img/proker/relasi/roadshow_main.png",
//                             thumbs: ["assets/img/proker/relasi/roadshow_1.png", "assets/img/proker/relasi/roadshow_2.png"]
//                         }
//                     ]
//                 },
//                 {
//                     name: "Kemitraan & Sponsorship",
//                     desc: "Membangun kemitraan strategis dan mencari peluang sponsorship untuk mendukung kelancaran kegiatan HIMTIKA.",
//                     members: [
//                         { photo: "assets/img/anggota/relasi/5.png", firstName: "Nama", lastName: "Ketua Dept", role: "Ketua Dept Kemitraan", highlight: "Nama" },
//                         { photo: "assets/img/anggota/relasi/6.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Kemitraan", highlight: "Nama" }
//                     ],
//                     proker: [
//                         {
//                             title: "Penjajakan Sponsorship Event",
//                             pic: "Nama Penanggung Jawab",
//                             desc: "Mencari dan menjalin kemitraan dengan sponsor untuk mendukung pendanaan setiap event besar yang diselenggarakan HIMTIKA.",
//                             mainImg: "assets/img/proker/relasi/sponsorship_main.png",
//                             thumbs: ["assets/img/proker/relasi/sponsorship_1.png", "assets/img/proker/relasi/sponsorship_2.png"]
//                         }
//                     ]
//                 }
//             ],
//             kadiv: {
//                 photo: "assets/img/divisi/kadiv_relasi.png",
//                 firstName: "Nama",
//                 lastName: "Ketua Relasi",
//                 role: "Ketua Divisi Relasi",
//                 scale: 1.1,
//                 posY: "0%"
//             }
//         }
//     },
//     {
//         name: "Edukasi",
//         desc: "Pengembangan ilmu dan workshop",
//         img: "assets/img/divisi/edukasi.png",
//         count: 7,
//         about: {
//             title: "Divisi Edukasi",
//             description: "Divisi Edukasi berkomitmen meningkatkan kapasitas akademik dan non-akademik anggota HIMTIKA melalui berbagai program pembelajaran. Divisi ini menyelenggarakan workshop, seminar, study club, dan pelatihan yang relevan dengan kebutuhan mahasiswa Informatika di era digital.",
//             bgIcon: "assets/img/icon/icon_edukasi.png",
//             departments: [
//                 {
//                     name: "Akademik & Pelatihan",
//                     desc: "Menyelenggarakan workshop, seminar, dan pelatihan untuk meningkatkan kapasitas akademik mahasiswa Informatika.",
//                     members: [
//                         { photo: "assets/img/anggota/edukasi/1.png", firstName: "Nama", lastName: "Ketua Dept", role: "Ketua Dept Akademik", highlight: "Nama" },
//                         { photo: "assets/img/anggota/edukasi/2.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Akademik", highlight: "Nama" },
//                         { photo: "assets/img/anggota/edukasi/3.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Akademik", highlight: "Nama" }
//                     ],
//                     proker: [
//                         {
//                             title: "Study Club Informatika",
//                             pic: "Nama Penanggung Jawab",
//                             desc: "Mengadakan kelompok belajar rutin bagi mahasiswa Informatika untuk memperdalam materi perkuliahan dan mempersiapkan diri menghadapi dunia kerja.",
//                             mainImg: "assets/img/proker/edukasi/studyclub_main.png",
//                             thumbs: ["assets/img/proker/edukasi/studyclub_1.png", "assets/img/proker/edukasi/studyclub_2.png", "assets/img/proker/edukasi/studyclub_3.png"]
//                         },
//                         {
//                             title: "Seminar & Workshop Teknologi",
//                             pic: "Nama Penanggung Jawab",
//                             desc: "Menyelenggarakan seminar dan workshop bertema teknologi terkini untuk menambah wawasan dan keterampilan praktis mahasiswa Informatika.",
//                             mainImg: "assets/img/proker/edukasi/seminar_main.png",
//                             thumbs: ["assets/img/proker/edukasi/seminar_1.png", "assets/img/proker/edukasi/seminar_2.png"]
//                         }
//                     ]
//                 },
//                 {
//                     name: "Kompetisi & Pengembangan",
//                     desc: "Mendorong partisipasi anggota dalam berbagai kompetisi serta program pengembangan diri di bidang teknologi.",
//                     members: [
//                         { photo: "assets/img/anggota/edukasi/4.png", firstName: "Nama", lastName: "Ketua Dept", role: "Ketua Dept Kompetisi", highlight: "Nama" },
//                         { photo: "assets/img/anggota/edukasi/5.png", firstName: "Nama", lastName: "Anggota", role: "Anggota Dept Kompetisi", highlight: "Nama" }
//                     ],
//                     proker: [
//                         {
//                             title: "Bootcamp Kompetitif",
//                             pic: "Nama Penanggung Jawab",
//                             desc: "Mempersiapkan anggota HIMTIKA mengikuti berbagai kompetisi teknologi tingkat nasional melalui pelatihan intensif dan terarah.",
//                             mainImg: "assets/img/proker/edukasi/bootcamp_main.png",
//                             thumbs: ["assets/img/proker/edukasi/bootcamp_1.png", "assets/img/proker/edukasi/bootcamp_2.png"]
//                         },
//                         {
//                             title: "Pendampingan Lomba",
//                             pic: "Nama Penanggung Jawab",
//                             desc: "Memberikan pendampingan teknis dan strategi kepada tim yang akan mengikuti lomba programming maupun hackathon.",
//                             mainImg: "assets/img/proker/edukasi/pendampingan_main.png",
//                             thumbs: ["assets/img/proker/edukasi/pendampingan_1.png", "assets/img/proker/edukasi/pendampingan_2.png"]
//                         },
//                         {
//                             title: "Sertifikasi Kompetensi",
//                             pic: "Nama Penanggung Jawab",
//                             desc: "Memfasilitasi anggota HIMTIKA untuk mengikuti program sertifikasi kompetensi di bidang teknologi informasi guna meningkatkan daya saing.",
//                             mainImg: "assets/img/proker/edukasi/sertifikasi_main.png",
//                             thumbs: ["assets/img/proker/edukasi/sertifikasi_1.png", "assets/img/proker/edukasi/sertifikasi_2.png"]
//                         },
//                         {
//                             title: "Coding Challenge Internal",
//                             pic: "Nama Penanggung Jawab",
//                             desc: "Mengadakan kompetisi coding internal secara rutin untuk mengasah kemampuan logika dan pemrograman anggota HIMTIKA secara berkelanjutan.",
//                             mainImg: "assets/img/proker/edukasi/coding_main.png",
//                             thumbs: ["assets/img/proker/edukasi/coding_1.png", "assets/img/proker/edukasi/coding_2.png"]
//                         },
//                         {
//                             title: "Hackathon HIMTIKA",
//                             pic: "Nama Penanggung Jawab",
//                             desc: "Menyelenggarakan hackathon tahunan sebagai wadah bagi mahasiswa Informatika untuk berinovasi menciptakan solusi digital dalam waktu singkat.",
//                             mainImg: "assets/img/proker/edukasi/hackathon_main.png",
//                             thumbs: ["assets/img/proker/edukasi/hackathon_1.png", "assets/img/proker/edukasi/hackathon_2.png", "assets/img/proker/edukasi/hackathon_3.png"]
//                         }
//                     ]
//                 }
//             ],
//             kadiv: {
//                 photo: "assets/img/divisi/kadiv_edukasi.png",
//                 firstName: "Nama",
//                 lastName: "Ketua Edukasi",
//                 role: "Ketua Divisi Edukasi",
//                 scale: 1.15,
//                 posY: "5%"
//             }
//         }
//     }
// ];

let currentIndex = 0;

// Status drag/swipe
let isDivisionDragging = false;
let divisionDragStartX = 0;
let divisionDragDistance = 0;
let divisionDragMoved = false;

const divisionSliderViewport =
    document.getElementById('divisionSliderViewport');


/*
Menghitung jarak antar-card berdasarkan ukuran card aktual.

Jadi tidak memakai angka tetap 501px lagi karena ukuran card
berubah pada mobile, tablet, dan desktop.
*/
function getCardSpacing() {
    const card = document.querySelector(
        '#divisionSlider .division-card'
    );

    if (!card) {
        return 280;
    }

    const cardWidth = card.offsetWidth;

    let cardGap = 28;

    if (window.innerWidth >= 640) { cardGap = 34; }
    if (window.innerWidth >= 768) { cardGap = 40; }
    if (window.innerWidth >= 1024) { cardGap = 48; }
    if (window.innerWidth >= 1280) { cardGap = 34; }
    if (window.innerWidth >= 1536) { cardGap = 64; }

    return cardWidth + cardGap;
}

/*
Membuat seluruh card satu kali.

Setelah itu card tidak dirender ulang setiap slider berpindah.
Yang berubah hanya transform, opacity, scale, dan z-index.
*/
function buildSlider() {
    const slider =
        document.getElementById('divisionSlider');

    if (!slider) {
        return;
    }

    slider.innerHTML = '';

    organizationData.forEach((division, index) => {
        const card =
            document.createElement('div');

        card.className = 'division-card';
        card.dataset.index = index;

        const badgeText = division.badge;

        card.innerHTML = `
            <img
                src="${division.image}"
                alt="${division.name}"
                draggable="false"
                onerror="
                    this.onerror = null;
                    this.src = 'assets/img/logo/Himtika.png';
                "
            >

            <div class="card-badge-label">
                ${badgeText}
            </div>

            <div class="card-badge-count">
                <img src="assets/img/icon/member-count.svg">
                ${division.memberCount}
            </div>

            <div class="card-info">
                <h3>${division.name}</h3>
                <p>${division.description}</p>
            </div>
        `;

        card.addEventListener('click', () => {
            /*
            Setelah swipe, click biasanya ikut terpanggil.
            Kondisi ini mencegah card berpindah dua kali.
            */
            if (divisionDragMoved) {
                return;
            }

            currentIndex = index;
            updateSlider();
        });

        slider.appendChild(card);
    });
}

/*
Membuat dot pagination.
*/
function buildDots() {
    const dotsContainer =
        document.getElementById('sliderDots');

    if (!dotsContainer) {
        return;
    }

    dotsContainer.innerHTML = '';

    organizationData.forEach((division, index) => {
        const dot =
            document.createElement('button');

        dot.type = 'button';
        dot.className = 'dot';
        dot.dataset.index = index;

        dot.setAttribute(
            'aria-label',
            `Pilih ${division.name}`
        );

        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });

        dotsContainer.appendChild(dot);
    });
}

/*
Mencari jarak terpendek secara melingkar.

Contoh:
Dari card terakhir menuju card pertama tidak bergerak melewati
seluruh card, tetapi mengambil jalur terpendek.
*/
function getCircularDiff(index, total) {
    let difference =
        index - currentIndex;

    if (difference > total / 2) {
        difference -= total;
    }

    if (difference < -total / 2) {
        difference += total;
    }

    return difference;
}

/*
Mengatur posisi setiap card.

dragOffset hanya berisi nilai ketika pengguna sedang swipe.
Dalam keadaan normal nilainya 0.
*/
function updateSlider(dragOffset = 0, updateSectionContent = true) {
    const slider = document.getElementById('divisionSlider');

    if (!slider) {
        return;
    }

    const total = organizationData.length;
    const cards = Array.from(slider.children);

    const cardSpacing = getCardSpacing();

    cards.forEach((card) => {
        const index = Number(card.dataset.index);
        const difference = getCircularDiff(index, total);
        const absoluteDifference = Math.abs(difference);

        let scale = 0.7;
        let opacity = 0;
        let zIndex = 10 - absoluteDifference;
        let liftY = 0;

        // Card tengah
        if (absoluteDifference === 0) {
            scale = 1.06;
            opacity = 1;
            liftY = -10;
        }

        // Card kanan dan kiri terdekat
        else if (absoluteDifference === 1) {
            scale = 0.86;
            opacity = 1;
        }

        // Card yang lebih jauh
        else if (absoluteDifference === 2) {
            scale = 0.72;
            opacity = 1;
        }

        // const translateX =
        //     difference * cardSpacing +
        //     dragOffset;

        let translateX;

        if (absoluteDifference === 2) {
            translateX = Math.sign(difference) * (cardSpacing * 1.8);
        } else {
            translateX = difference * cardSpacing;
        }

        translateX += dragOffset;

        card.style.transform = `
            translateX(${translateX}px)
            translateY(${liftY}px)
            scale(${scale})
        `;

        card.style.opacity = opacity;

        card.style.zIndex = zIndex;

        card.style.pointerEvents =
            absoluteDifference > 2
                ? 'none'
                : 'auto';

        card.classList.toggle(
            'active',
            absoluteDifference === 0
        );
    });

    const dots = document.querySelectorAll('#sliderDots .dot');

    dots.forEach((dot) => {
        const index = Number(dot.dataset.index);

        dot.classList.toggle(
            'active',
            index === currentIndex
        );
    });

    /*
    Saat jari masih bergerak, bagian bawah tidak perlu
    dirender ulang berkali-kali.

    Bagian bawah baru berubah ketika swipe selesai.
    */
    if (!updateSectionContent) {
        return;
    }

    updateAboutSection(currentIndex);
    // updateWakilSection(currentIndex);
    updateSekretarisSection(currentIndex);
    updateBendaharaSection(currentIndex);
    updateDepartmentSections(currentIndex);
    updateProkerSection(currentIndex);
}

// ==================== DIVISION SLIDER SWIPE ====================
function startDivisionDrag(clientX) {
    if (!divisionSliderViewport) {
        return;
    }

    isDivisionDragging = true;
    divisionDragMoved = false;

    divisionDragStartX = clientX;
    divisionDragDistance = 0;

    divisionSliderViewport.classList.add(
        'is-dragging'
    );
}

function moveDivisionDrag(clientX) {
    if (!isDivisionDragging) {
        return;
    }

    divisionDragDistance =
        clientX -
        divisionDragStartX;

    /*
    Jika jari sudah bergerak lebih dari 5px,
    interaksi dianggap swipe, bukan click.
    */
    if (
        Math.abs(divisionDragDistance) >
        5
    ) {
        divisionDragMoved = true;
    }

    /*
    Card langsung mengikuti jari selama swipe.
    */
    updateSlider(
        divisionDragDistance,
        false
    );
}

function endDivisionDrag() {
    if (!isDivisionDragging) {
        return;
    }

    isDivisionDragging = false;

    if (divisionSliderViewport) {
        divisionSliderViewport.classList.remove(
            'is-dragging'
        );
    }

    const cardSpacing =
        getCardSpacing();

    /*
    Threshold mengikuti ukuran card,
    tetapi tidak pernah lebih dari 90px.
    */
    const swipeThreshold =
        Math.min(
            cardSpacing * 0.18,
            90
        );

    // Swipe ke kiri: next
    if (
        divisionDragDistance <
        -swipeThreshold
    ) {
        currentIndex =
            (
                currentIndex +
                1
            ) %
            organizationData.length;
    }

    // Swipe ke kanan: previous
    else if (
        divisionDragDistance >
        swipeThreshold
    ) {
        currentIndex =
            (
                currentIndex -
                1 +
                organizationData.length
            ) %
            organizationData.length;
    }

    divisionDragDistance = 0;

    /*
    Card melakukan snap ke posisi final.
    */
    updateSlider();

    /*
    Memberi waktu agar event click bawaan browser
    tidak ikut memindahkan slider sekali lagi.
    */
    window.setTimeout(() => {
        divisionDragMoved = false;
    }, 100);
}

// ==================== ABOUT SECTION UPDATER ====================
let aboutUpdateTimeout = null;

function highlightFirstWord(text) {
    const words = text.trim().split(' ');

    const firstWord = words.shift();
    const remainingWords = words.join(' ');

    return `
        <strong class="about-section-role-highlight">
            ${firstWord}
        </strong>
        ${remainingWords}
    `;
}

function renderAboutRoleList(roles) {
    return `
        <ul class="about-section-role-list">
            ${roles
                .map((role) => `
                    <li class="about-section-role-item">
                        <img
                            src="assets/img/icon/icon-check.svg"
                            alt=""
                            class="about-section-role-icon"
                            aria-hidden="true"
                        >

                        <span>
                            ${highlightFirstWord(role)}
                        </span>
                    </li>
                `)
                .join('')}
        </ul>
    `;
}

function renderAboutDepartmentList(departments) {
    return `
        <ul class="about-section-department-list">
            ${departments
                .map((department) => `
                    <li class="about-section-department-item">
                        <img
                            src="assets/img/icon/icon-frame.svg"
                            alt=""
                            class="about-section-department-icon"
                            aria-hidden="true"
                        >

                        <span>
                            Departemen
                            <strong>
                                ${department.name}
                            </strong>
                        </span>
                    </li>
                `)
                .join('')}
        </ul>
    `;
}

function highlightNickname(name, nickname) {
    if (!name || !nickname) {
        return name;
    }

    return name.replace(
        nickname,
        `<span class="about-section-person-name-highlight">${nickname}</span>`
    );
}

function renderAboutLeaderCard({
    title,
    description,
    photo,
    icon,
    name,
    nickname,
    role,
    roles = [],
    departments = [],
    reverse = false
}) {
    const reverseClass =
        reverse
            ? ' about-section-card-reverse'
            : '';

    const contentList =
        roles.length > 0
            ? `
                <div class="about-section-list-label">
                    Peran ${title}, yaitu:
                </div>

                ${renderAboutRoleList(roles)}
            `
            : `
                <div class="about-section-list-label">
                    Departemen yang dimiliki, yaitu:
                </div>

                ${renderAboutDepartmentList(departments)}
            `;

    return `
        <article
            class="about-section-card${reverseClass}"
        >
            <div class="about-section-card-content">
                <h3 class="about-section-card-title">
                    ${title}
                </h3>

                <p class="about-section-card-description">
                    ${description}
                </p>

                ${contentList}
            </div>

            <div class="about-section-person">
                <div class="about-section-person-image-wrapper">
                    <img
                        src="${icon || ''}"
                        alt=""
                        class="about-section-card-icon"
                        aria-hidden="true"
                        onerror="this.style.display='none'"
                    >

                    <img
                        src="${photo}"
                        alt="${name}"
                        class="about-section-person-image"
                        onerror="
                            this.onerror = null;
                            this.src = 'assets/img/logo/Himtika.png';
                        "
                    >

                    <div class="about-section-person-badge">
                        <span class="about-section-person-name">
                            ${highlightNickname(name, nickname)}
                        </span>

                        <span class="about-section-person-role">
                            ${role}
                        </span>
                    </div>
                </div>
            </div>
        </article>
    `;
}

function updateAboutSection(index) {
    const data =
        organizationData[index];

    const title =
        document.getElementById(
            'aboutDivisionName'
        );

    const cards =
        document.getElementById(
            'aboutCards'
        );

    if (!data || !title || !cards) {
        return;
    }

    cards.classList.add(
        'about-section-fade-out'
    );

    title.style.opacity = '0';

    clearTimeout(aboutUpdateTimeout);

    aboutUpdateTimeout =
        setTimeout(() => {

            /*
            ==========================
            STEERING COMMITTEE
            ==========================
            */
            if (data.type === 'sc') {
                title.textContent =
                    'Steering Committee';

                cards.innerHTML =
                    data.leaders
                        .map((leader, leaderIndex) => {
                            return renderAboutLeaderCard({
                                title:
                                    leader.title,

                                description:
                                    leader.description,

                                photo:
                                    leader.photo,

                                icon:
                                    leader.icon,

                                name:
                                    leader.name,
                                
                                nickname:
                                    leader.nickname,

                                role:
                                    leader.role,

                                roles:
                                    leader.roles,

                                reverse:
                                    leaderIndex === 1
                            });
                        })
                        .join('');
            }

            /*
            ==========================
            DIVISION
            ==========================
            */
            else {
                title.textContent =
                    data.shortName;

                cards.innerHTML =
                    renderAboutLeaderCard({
                        title:
                            data.shortName,

                        description:
                            data.divisionDescription,

                        photo:
                            data.leader.photo,

                        icon:
                            data.leader.icon,

                        name:
                            data.leader.name,
                        
                        nickname:
                            data.leader.nickname,

                        role:
                            data.leader.role,

                        departments:
                            data.departments
                    });
            }

            cards.classList.remove(
                'about-section-fade-out'
            );

            title.style.opacity = '1';

        }, 280);
}

// let aboutUpdateTimeout = null;

// function updateAboutSection(index) {
//     const div = divisions[index];
//     if (!div || !div.about) return;

//     const about = div.about;

//     // Elemen-elemen yang akan diupdate
//     const elTitle      = document.getElementById('aboutDivisionName');
//     const elCardTitle  = document.getElementById('aboutCardTitle');
//     const elCardSpan   = document.getElementById('aboutCardSpan');
//     const elDesc       = document.getElementById('aboutCardDesc');
//     const elDeptList   = document.getElementById('aboutDeptList');
//     const elPhoto      = document.getElementById('aboutKadivPhoto');
//     const elBgIcon     = document.getElementById('aboutBgIcon');
//     const elFirstName  = document.getElementById('badgeFirstName');
//     const elLastName   = document.getElementById('badgeLastName');
//     const elRole       = document.getElementById('badgeRole');
//     const card         = document.getElementById('aboutCard');

//     if (!card) return;

//     // Fade out dulu
//     card.classList.add('about-fade-out');
//     if (elTitle) elTitle.style.opacity = '0';

//     clearTimeout(aboutUpdateTimeout);
//     aboutUpdateTimeout = setTimeout(() => {
//         // Update semua teks
//         if (elTitle)     elTitle.textContent   = about.title;
//         if (elCardSpan)  elCardSpan.textContent = about.title;
//         if (elCardTitle) elCardTitle.innerHTML  = `Kenali Lebih Dalam<br>Tentang <span class="about-gold" id="aboutCardSpan">${about.title}</span>`;
//         if (elDesc)      elDesc.textContent     = about.description;

//         // Update departemen (list ringkas di about-card)
//         if (elDeptList) {
//             elDeptList.innerHTML = about.departments
//                 .map(d => `<li><img src="assets/img/icon/icon-frame.svg" alt="" class="dept-icon"> Departemen <span class="about-gold">${d.name}</span></li>`)
//                 .join('');
//         }

//         // Update foto kadiv
//         if (elPhoto) {
//             elPhoto.src = about.kadiv.photo;
//             elPhoto.alt = about.kadiv.role;
//             // Framing per kadiv: tiap foto sumber punya proporsi & posisi
//             // kepala yang beda, jadi scale & posisi vertikal diatur per
//             // divisi supaya hasilnya konsisten seperti foto RnD.
//             elPhoto.style.setProperty('--photo-scale', about.kadiv.scale || 1.15);
//             elPhoto.style.setProperty('--photo-pos-y', about.kadiv.posY || '5%');
//         }

//         // Update icon dekorasi belakang kadiv (beda tiap divisi)
//         if (elBgIcon && about.bgIcon) {
//             elBgIcon.src = about.bgIcon;
//         }

//         if (elFirstName) elFirstName.textContent = about.kadiv.firstName;
//         if (elLastName)  elLastName.textContent   = about.kadiv.lastName;
//         if (elRole)      elRole.textContent        = about.kadiv.role;

//         // Fade in kembali
//         card.classList.remove('about-fade-out');
//         if (elTitle) elTitle.style.opacity = '1';
//     }, 280); // sedikit lebih pendek dari transisi CSS (0.4s)
// }

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

// Setiap divisi punya 2 departemen, masing-masing punya section sendiri
// (#deptSection1 & #deptSection2) yang isinya diganti sesuai divisi aktif,
// dengan pola yang sama seperti about-card: fade-out -> ganti konten -> fade-in.

// Bungkus nama dengan highlight emas pada kata yang ditandai di data
// (mis. nickname/panggilan), sisanya tetap putih.
function renderMemberName(member, highlightClass) {
    const full = member.name.trim();
    const nickname = member.nickname?.trim();

    if (!nickname) {
        return full;
    }

    const fullLower =
        full.toLowerCase();

    const nicknameLower =
        nickname.toLowerCase();

    const idx =
        fullLower.indexOf(nicknameLower);

    /*
    Nickname terdapat di dalam nama lengkap.
    Contoh:
    Muhammad Rafisyah Rizkiyawan
    */
    if (idx !== -1) {
        const before =
            full.slice(0, idx);

        const match =
            full.slice(
                idx,
                idx + nickname.length
            );

        const after =
            full.slice(
                idx + nickname.length
            );

        return `
            ${before}<span class="${highlightClass}">${match}</span>${after}
        `;
    }

    /*
    Nickname tidak terdapat di nama lengkap.
    Contoh:
    Rizky Fitri Putri Awaliyah (Pipit)
    */
    return `
        ${full}
        (<span class="${highlightClass}">${nickname}</span>)
    `;
}

// ==================== DEPARTMENT SECTION UPDATER ====================
function renderDepartmentMember(member) {
    return `
        <article class="department-section-member">
            <div class="department-section-member-image-wrapper">
                <div class="department-section-member-shine"></div>

                <div class="department-section-member-floating">
                    <img
                        src="${member.photo}"
                        alt="${member.name}"
                        class="department-section-member-image"
                        onerror="
                            this.onerror = null;
                            this.src = 'assets/img/logo/Himtika.png';
                        "
                    >
                </div>

                <div class="department-section-member-overlay">
                    <h3 class="department-section-member-name">
                        ${renderMemberName(
                            member,
                            'department-section-member-name-highlight'
                        )}
                    </h3>

                    <p class="department-section-member-role">
                        ${member.role}
                    </p>
                </div>
            </div>
        </article>
    `;
}

function updateDepartmentSections(index) {
    const data =
        organizationData[index];

    const section1 =
        document.getElementById(
            'departmentSection1'
        );

    const section2 =
        document.getElementById(
            'departmentSection2'
        );

    if (!section1 || !section2) {
        return;
    }


    /*
    ==========================
    STEERING COMMITTEE
    ==========================
    */

    if (
        !data ||
        data.type === 'sc'
    ) {
        section1.hidden = true;
        section2.hidden = true;

        return;
    }


    /*
    ==========================
    DIVISION
    ==========================
    */

    const departments =
        data.departments || [];

    const departmentSections = [
        {
            section: section1,
            title:
                document.getElementById(
                    'departmentTitle1'
                ),
            description:
                document.getElementById(
                    'departmentDescription1'
                ),
            members:
                document.getElementById(
                    'departmentMembers1'
                )
        },

        {
            section: section2,
            title:
                document.getElementById(
                    'departmentTitle2'
                ),
            description:
                document.getElementById(
                    'departmentDescription2'
                ),
            members:
                document.getElementById(
                    'departmentMembers2'
                )
        }
    ];


    departmentSections.forEach(
        (elements, departmentIndex) => {

            const department =
                departments[departmentIndex];

            /*
            Kalau ternyata suatu saat ada divisi
            yang hanya punya satu departemen,
            section kedua otomatis hilang.
            */
            if (!department) {
                elements.section.hidden = true;
                return;
            }

            elements.section.hidden = false;

            if (elements.title) {
                elements.title.textContent =
                    department.name;
            }

            if (elements.description) {
                elements.description.textContent =
                    department.description;
            }

            if (elements.members) {
                elements.members.innerHTML =
                    department.members
                        .map(renderDepartmentMember)
                        .join('');
            }
        }
    );
}

// ==================== SC MANAGEMENT SECTION UPDATER ====================
function renderManagementMember(member, sectionName) {
    return `
        <article class="${sectionName}-section-member">
            <div class="${sectionName}-section-member-image-wrapper">
                <div class="${sectionName}-section-member-shine"></div>

                <div class="${sectionName}-section-member-floating">
                    <img
                        src="${member.photo}"
                        alt="${member.name}"
                        class="${sectionName}-section-member-image"
                        onerror="
                            this.onerror = null;
                            this.src = 'assets/img/logo/Himtika.png';
                        "
                    >
                </div>

                <div class="${sectionName}-section-member-overlay">
                    <h3 class="${sectionName}-section-member-name">
                        ${renderMemberName(
                            member,
                            `${sectionName}-section-member-name-highlight`
                        )}
                    </h3>

                    <p class="${sectionName}-section-member-role">
                        ${member.role}
                    </p>
                </div>
            </div>
        </article>
    `;
}

function renderManagementRole(role, sectionName) {
    const words =
        role.trim().split(' ');

    const firstWord =
        words.shift();

    const rest =
        words.join(' ');

    return `
        <li class="${sectionName}-section-role-item">
            <img
                src="assets/img/icon/icon-check.svg"
                alt=""
                class="${sectionName}-section-role-icon"
                aria-hidden="true"
            >

            <span>
                <strong class="${sectionName}-section-role-highlight">
                    ${firstWord}
                </strong>
                ${rest}
            </span>
        </li>
    `;
}

// ==================== ADMINISTRASI SEKRETARIS SECTION UPDATER ====================
function updateSekretarisSection(index) {
    const data =
        organizationData[index];

    const section =
        document.getElementById(
            'secretarySection'
        );

    if (!section) {
        return;
    }

    if (
        !data ||
        data.type !== 'sc' ||
        !data.secretary
    ) {
        section.hidden = true;
        return;
    }

    const secretary =
        data.secretary;

    section.hidden = false;

    const eyebrow =
        document.getElementById(
            'secretaryEyebrow'
        );

    const title =
        document.getElementById(
            'secretaryTitle'
        );

    const description =
        document.getElementById(
            'secretaryDescription'
        );

    const membersMobile =
        document.getElementById(
            'secretaryMembersMobile'
        );

    const membersDesktop =
        document.getElementById(
            'secretaryMembersDesktop'
        );

    const roles =
        document.getElementById(
            'secretaryRoleList'
        );


    if (eyebrow) {
        eyebrow.textContent =
            secretary.kicker;
    }

    if (title) {
        title.textContent =
            secretary.title;
    }

    if (description) {
        description.textContent =
            secretary.description;
    }

    const membersHTML =
        secretary.members
            .map((member) =>
                renderManagementMember(
                    member,
                    'secretary'
                )
            )
            .join('');

    if (membersMobile) {
        membersMobile.innerHTML =
            membersHTML;
    }

    if (membersDesktop) {
        membersDesktop.innerHTML =
            membersHTML;
    }

    if (roles) {
        roles.innerHTML =
            secretary.roles
                .map((role) =>
                    renderManagementRole(
                        role,
                        'secretary'
                    )
                )
                .join('');
    }
}

// ==================== KEUANGAN BENDAHARA SECTION UPDATER ====================
function updateBendaharaSection(index) {
    const data =
        organizationData[index];

    const section =
        document.getElementById(
            'treasurerSection'
        );

    if (!section) {
        return;
    }

    if (
        !data ||
        data.type !== 'sc' ||
        !data.treasurer
    ) {
        section.hidden = true;
        return;
    }

    const treasurer =
        data.treasurer;

    section.hidden = false;

    const eyebrow =
        document.getElementById(
            'treasurerEyebrow'
        );

    const title =
        document.getElementById(
            'treasurerTitle'
        );

    const description =
        document.getElementById(
            'treasurerDescription'
        );

    const membersMobile =
        document.getElementById(
            'treasurerMembersMobile'
        );

    const membersDesktop =
        document.getElementById(
            'treasurerMembersDesktop'
        );

    const roles =
        document.getElementById(
            'treasurerRoleList'
        );


    if (eyebrow) {
        eyebrow.textContent =
            treasurer.kicker;
    }

    if (title) {
        title.textContent =
            treasurer.title;
    }

    if (description) {
        description.textContent =
            treasurer.description;
    }

    const membersHTML =
        treasurer.members
            .map((member) =>
                renderManagementMember(
                    member,
                    'treasurer'
                )
            )
            .join('');

    if (membersMobile) {
        membersMobile.innerHTML =
            membersHTML;
    }

    if (membersDesktop) {
        membersDesktop.innerHTML =
            membersHTML;
    }

    if (roles) {
        roles.innerHTML =
            treasurer.roles
                .map((role) =>
                    renderManagementRole(
                        role,
                        'treasurer'
                    )
                )
                .join('');
    }
}

// ==================== PROKER SECTION UPDATER ====================
let currentProkerIndex = 0;
let prokerAnimationTimeout = null;
let isProkerChanging = false;

function getCurrentProkerData() {
    const item = organizationData[currentIndex];

    if (
        !item ||
        item.type === 'sc' ||
        !item.programs ||
        item.programs.length === 0
    ) {
        return null;
    }

    return item;
}

function renderProkerThumbnail(proker, prokerIndex, isActive) {
    return `
        <button
            type="button"
            class="proker-section-thumbnail${isActive ? ' is-active' : ''}"
            data-proker-index="${prokerIndex}"
            aria-label="Pilih program kerja ${proker.title}"
        >
            <img
                src="${proker.image}"
                alt="${proker.title}"
                class="proker-section-thumbnail-image"
                draggable="false"
                onerror="
                    this.onerror = null;
                    this.src = 'assets/img/logo/Himtika.png';
                "
            >
        </button>
    `;
}

function renderProkerThumbnails(item) {
    const track = document.getElementById('prokerThumbnailTrack');

    if (!track) { return; }

    track.innerHTML =
        item.programs
            .map(function(proker, index) {
                return renderProkerThumbnail(
                    proker,
                    index,
                    index === currentProkerIndex
                );
            })
            .join('');
}

function updateProkerThumbnailActive() {
    const track = document.getElementById('prokerThumbnailTrack');

    if (!track) { return; }

    const thumbnails = track.querySelectorAll('.proker-section-thumbnail');

    thumbnails.forEach(function(thumbnail, index) {
        thumbnail.classList.toggle(
            'is-active',
            index === currentProkerIndex
        );
    });
}

function getProkerThumbnailSpacing() {
    const thumbnail =
        document.querySelector(
            '#prokerThumbnailTrack .proker-section-thumbnail'
        );

    if (!thumbnail) {
        return 94;
    }

    const thumbnailWidth =
        thumbnail.offsetWidth;

    let thumbnailGap = 10;

    if (window.innerWidth >= 640) {
        thumbnailGap = 12;
    }

    if (window.innerWidth >= 768) {
        thumbnailGap = 14;
    }

    if (window.innerWidth >= 1024) {
        thumbnailGap = 12;
    }

    if (window.innerWidth >= 1280) {
        thumbnailGap = 14;
    }

    if (window.innerWidth >= 1536) {
        thumbnailGap = 16;
    }

    return thumbnailWidth + thumbnailGap;
}

function updateProkerThumbnailSlider(animate = true) {
    const item =
        getCurrentProkerData();

    const track =
        document.getElementById(
            'prokerThumbnailTrack'
        );

    if (
        !item ||
        !track ||
        !item.programs.length
    ) {
        return;
    }

    const total =
        item.programs.length;

    const thumbnails =
        Array.from(
            track.querySelectorAll(
                '.proker-section-thumbnail'
            )
        );

    const spacing =
        getProkerThumbnailSpacing();


    thumbnails.forEach(function(
        thumbnail,
        index
    ) {
        /*
        ========================================
        CIRCULAR FORWARD DISTANCE

        current 0:
        0 -> slot 0
        1 -> slot 1
        2 -> slot 2
        3 -> slot 3
        ...

        current 4:
        4 -> slot 0
        0 -> slot 1
        1 -> slot 2
        ...

        Jadi setelah NEXT, card yang baru dilewati
        berpindah ke kanan/belakang.
        ========================================
        */
        const distance =
            (
                index -
                currentProkerIndex +
                total
            ) % total;


        let scale = 0.82;
        let opacity = 0;
        let zIndex = 1;

        /*
        ACTIVE
        */
        if (distance === 0) {
            scale = 1.08;
            opacity = 1;
            zIndex = 5;
        }

        /*
        NEXT PERTAMA
        */
        else if (distance === 1) {
            scale = 0.96;
            opacity = 1;
            zIndex = 4;
        }

        /*
        NEXT KEDUA
        */
        else if (distance === 2) {
            scale = 0.9;
            opacity = 0.82;
            zIndex = 3;
        }

        /*
        CARD KEEMPAT:
        hanya sedikit mengintip
        */
        else if (distance === 3) {
            scale = 0.84;
            opacity = 0.32;
            zIndex = 2;
        }


        const translateX =
            distance * spacing;


        thumbnail.style.transition =
            animate
                ? `
                    transform 520ms
                    cubic-bezier(0.22, 1, 0.36, 1),
                    opacity 420ms ease,
                    filter 420ms ease
                `
                : 'none';


        thumbnail.style.transform = `
            translate3d(${translateX}px, 0, 0)
            scale(${scale})
        `;

        thumbnail.style.opacity =
            opacity;

        thumbnail.style.zIndex =
            zIndex;

        thumbnail.style.pointerEvents =
            distance > 3
                ? 'none'
                : 'auto';


        thumbnail.classList.toggle(
            'is-active',
            distance === 0
        );

        thumbnail.classList.toggle(
            'is-distant',
            distance === 3
        );
    });
}

function updateProkerContent(item) {
    const proker = item.programs[currentProkerIndex];

    if (!proker) {
        return;
    }

    const divisionName = document.getElementById('prokerDivisionName');
    const background = document.getElementById('prokerBackground');
    const department = document.getElementById('prokerDepartment');
    const title = document.getElementById('prokerTitle');
    const pic = document.getElementById('prokerPic');
    const description = document.getElementById('prokerDescription');
    const learnMore = document.getElementById('prokerLearnMore');
    const counterCurrent = document.getElementById('prokerCurrent');
    const counterTotal = document.getElementById('prokerTotal');

    if (divisionName) {
        divisionName.textContent = item.shortName;
    }
    if (background) {
        background.src = proker.image;
        background.alt = proker.title;
    }
    if (department) {
        department.textContent = `Dept. ${proker.department}`;
    }
    if (title) {
        title.textContent = proker.title;
    }
    if (pic) {
        pic.textContent = `Penanggung Jawab: ${proker.pic}`;
    }
    if (description) {
        description.textContent = proker.description;
    }
    if (counterCurrent) {
        counterCurrent.textContent = currentProkerIndex + 1;
    }
    if (counterTotal) {
        counterTotal.textContent = item.programs.length;
    }
    if (learnMore) {
        if (proker.href) {
            learnMore.href = proker.href;
            learnMore.removeAttribute('aria-disabled');
            learnMore.removeAttribute('tabindex');
        } else {
            learnMore.href = '#';
            learnMore.setAttribute('aria-disabled','true');
            learnMore.setAttribute('tabindex','-1');
        }
    }
}

function animateProkerContentChange(item, newIndex) {
    const background =
        document.getElementById(
            'prokerBackground'
        );

    const content =
        document.getElementById(
            'prokerContent'
        );

    if (!background || !content) {
        currentProkerIndex =
            newIndex;

        updateProkerContent(item);
        updateProkerThumbnailSlider();

        return;
    }


    clearTimeout(
        prokerAnimationTimeout
    );


    isProkerChanging = true;


    /*
    ========================================
    PHASE 1 — KELUAR
    ========================================
    */
    background.classList.add(
        'proker-background-leave'
    );

    content.classList.add(
        'proker-content-leave'
    );


    prokerAnimationTimeout =
        window.setTimeout(
            function() {

                /*
                GANTI DATA ketika elemen lama
                sudah hampir tidak terlihat.
                */
                currentProkerIndex =
                    newIndex;

                updateProkerContent(item);

                updateProkerThumbnailSlider();


                /*
                Force browser membaca state baru
                sebelum animasi masuk.
                */
                requestAnimationFrame(
                    function() {

                        requestAnimationFrame(
                            function() {

                                background
                                    .classList
                                    .remove(
                                        'proker-background-leave'
                                    );

                                content
                                    .classList
                                    .remove(
                                        'proker-content-leave'
                                    );

                                background
                                    .classList
                                    .add(
                                        'proker-background-enter'
                                    );

                                content
                                    .classList
                                    .add(
                                        'proker-content-enter'
                                    );


                                window.setTimeout(
                                    function() {

                                        background
                                            .classList
                                            .remove(
                                                'proker-background-enter'
                                            );

                                        content
                                            .classList
                                            .remove(
                                                'proker-content-enter'
                                            );

                                        isProkerChanging =
                                            false;

                                    },
                                    380
                                );
                            }
                        );
                    }
                );

            },
            220
        );
}

function updateProkerSection(index) {
    const section =
        document.getElementById(
            'prokerSection'
        );

    if (!section) {
        return;
    }


    const item =
        organizationData[index];


    if (
        !item ||
        item.type === 'sc' ||
        !item.programs ||
        item.programs.length === 0
    ) {
        section.hidden = true;
        return;
    }


    section.hidden = false;


    if (
        currentProkerIndex >=
        item.programs.length
    ) {
        currentProkerIndex = 0;
    }


    updateProkerContent(item);

    renderProkerThumbnails(item);


    requestAnimationFrame(
        function() {
            updateProkerThumbnailSlider(
                false
            );
        }
    );
}

function goToProker(newIndex) {
    const item =
        getCurrentProkerData();

    if (
        !item ||
        isProkerChanging
    ) {
        return;
    }


    const total =
        item.programs.length;


    const safeIndex =
        (
            (newIndex % total) +
            total
        ) % total;


    if (
        safeIndex ===
        currentProkerIndex
    ) {
        return;
    }


    /*
    Thumbnail bergerak ke state baru dulu.
    */
    const oldIndex =
        currentProkerIndex;

    currentProkerIndex =
        safeIndex;

    updateProkerThumbnailSlider();

    /*
    Balikkan state data sebentar.
    Pergantian data dilakukan saat fade-out selesai.
    */
    currentProkerIndex =
        oldIndex;


    animateProkerContentChange(
        item,
        safeIndex
    );
}

// Navigation
document.addEventListener('DOMContentLoaded', () => {
    const prokerPrevBtn = document.getElementById('prokerPrevBtn');
    const prokerNextBtn = document.getElementById('prokerNextBtn');
    const prokerThumbnailTrack = document.getElementById('prokerThumbnailTrack');

    if (prokerPrevBtn) {
        prokerPrevBtn.addEventListener('click',
            function() {
                goToProker(currentProkerIndex - 1);
            }
        );
    }

    if (prokerNextBtn) {
        prokerNextBtn.addEventListener('click',
            function() {
                goToProker(currentProkerIndex + 1);
            }
        );
    }

    if (prokerThumbnailTrack) {
        prokerThumbnailTrack.addEventListener('click',
            function(event) {
                const thumbnail = event.target.closest('.proker-section-thumbnail');

                if (!thumbnail) { return; }

                const index = Number(thumbnail.dataset.prokerIndex);

                if (Number.isNaN(index)) { return; }

                goToProker(index);
            }
        );
    }

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');


    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + organizationData.length) % organizationData.length;
            currentProkerIndex = 0;
            updateSlider();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % organizationData.length;
            currentProkerIndex = 0;
            updateSlider();
        });
    }

    /*
    EVENT SWIPE MOBILE
    */
    if (divisionSliderViewport) {
        divisionSliderViewport.addEventListener('touchstart', (event) => {
            if (!event.touches.length) {
                return;
            }

            startDivisionDrag(
                event.touches[0].clientX
            );
        },
        {
            passive: true
        });

        divisionSliderViewport.addEventListener('touchmove', (event) => {
            if (!event.touches.length) {
                return;
            }

            moveDivisionDrag(
                event.touches[0].clientX
            );
        },
        {
            passive: true
        });

        divisionSliderViewport.addEventListener('touchend', endDivisionDrag);
        divisionSliderViewport.addEventListener('touchcancel', endDivisionDrag);
    }


    /*
    OPSIONAL: DRAG MOUSE DESKTOP
    */
    if (divisionSliderViewport) {
        divisionSliderViewport.addEventListener('mousedown', (event) => {
            if (event.button !== 0) {
                return;
            }

            event.preventDefault();
            startDivisionDrag(event.clientX);
        });

        window.addEventListener('mousemove', (event) => {
            moveDivisionDrag(event.clientX);
        });

        window.addEventListener('mouseup', endDivisionDrag);
    }


    /*
    Ketika ukuran layar berubah, posisi dan jarak card
    dihitung ulang tanpa membangun ulang card.
    */
    window.addEventListener('resize', () => {
        updateSlider(0, false);
        updateProkerThumbnailSlider(false);
    });

    /*
    INITIALIZATION
    */
    buildSlider();
    buildDots();
    updateSlider();
});